import { pbkdf2, randomBytes } from "node:crypto";
import { promisify } from "node:util";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    // TO-DO: 상세 구현

    const keylen = 64;
    const salt = randomBytes(keylen);
    const iterations = parseInt(this.configService.get("CRYPTO_ITERATIONS"));
    const pbkdf2Async = promisify(pbkdf2);
    try {
      const derivedKey = await pbkdf2Async(password, salt, iterations, keylen, "sha512");

      const user = new User();
      user.email = email;
      user.password = derivedKey.toString("hex");
      user.salt = salt.toString("hex");

      return this.usersRepository.save(user);
    } catch (error) {
      throw error;
    }
  }
}
