import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignUpDto {
  @IsEmail({}, { message: "Invalid email" })
  public readonly email: string;

  @IsNotEmpty({ message: "Password required" })
  @IsString({ message: "Invalid password" })
  public readonly password: string;
}
