import { Controller, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { SignUpDto } from "./dto/sign-up.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/signup")
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.usersService.signUp(signUpDto);
  }
}
