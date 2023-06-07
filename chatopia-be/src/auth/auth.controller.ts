import {
  Body,
  Controller,
  Post,
} from "@nestjs/common";
import { LoginRequestDto } from "src/dto/login-request.dto";
import { AuthService } from "src/auth/auth.service";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post("login")
  async login(@Body() loginRequestDto: LoginRequestDto) {
    return await this.authService.jwtLogIn(loginRequestDto);
  }
}
