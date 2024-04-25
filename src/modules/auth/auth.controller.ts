import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInModel } from './models/sign-in.model';
import { LoginModel } from './models/login.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  signIn(@Body() newUser: SignInModel) {
    return this.authService.signIn(newUser);
  }

  @Post('login')
  login(@Body() userData: LoginModel) {
    return this.authService.login(userData);
  }
}
