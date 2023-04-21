import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly userId: string;
  @IsString()
  readonly name: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
  readonly avatar: Buffer;
}
