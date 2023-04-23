import { Module, forwardRef } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt/jwt.strategy";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: "1y" },
    }),
    // 서로 참조할때 순환모듈
    forwardRef(() => UsersModule),
  ],
  providers: [AuthService, JwtStrategy, JwtService],
  //
  exports: [AuthService, JwtStrategy, JwtService],
})
export class AuthModule {}
