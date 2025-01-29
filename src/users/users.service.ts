import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    // TO-DO: 상세 구현

    const user = new User();
    user.email = email;
    user.password = password;
    user.salt = "salt";

    return this.usersRepository.save(user);
  }
}
