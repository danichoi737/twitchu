import { pbkdf2, randomBytes } from "node:crypto";
import { promisify } from "node:util";
import { ConflictException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import { SignUpDto } from "./dto/sign-up.dto";

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService,
    private readonly dataSource: DataSource,
  ) {}

  public async signUp(signUpDto: SignUpDto) {
    const { email, password } = signUpDto;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    // 중복 확인
    const user = await queryRunner.manager.getRepository(User).findOne({ where: { email } });
    if (user) {
      throw new ConflictException("Already exist user");
    }

    const keylen = 64;
    const salt = randomBytes(keylen);
    const iterations = parseInt(this.configService.get("CRYPTO_ITERATIONS"));
    const pbkdf2Async = promisify(pbkdf2);
    try {
      // 비밀번호 암호화
      const derivedKey = await pbkdf2Async(password, salt, iterations, keylen, "sha512");

      // 사용자 생성
      const user = new User();
      user.email = email;
      user.password = derivedKey.toString("hex");
      user.salt = salt.toString("hex");
      const returned = await queryRunner.manager.getRepository(User).save(user);
      await queryRunner.commitTransaction();

      // 신규 사용자 이메일 반환
      return returned.email;
    } catch (error) {
      await queryRunner.rollbackTransaction();

      // TO-DO: 암호화 오류 구분 필요
      console.error(error);
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
