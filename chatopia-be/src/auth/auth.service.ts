import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersRepository } from "src/users/users.repository";
import { LoginRequestDto } from "../dto/login-request.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;
    const user = await this.usersRepository.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException("이메일과 비밀번호를 확인해주세요");
    }
    //pass가 일치한지
    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );
    if (!isPasswordValidated) {
      throw new UnauthorizedException("비밀번호를 확인해주세요");
    }

    const payload = { sub: user.id };

    return {
      token: this.jwtService.sign(payload, {
        secret: process.env.SECRET_KEY,
      }),
    };
  }
}
