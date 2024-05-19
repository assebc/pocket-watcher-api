import { Injectable } from '@nestjs/common';
import { SignInModel } from './models/sign-in.model';
import { JwtService } from '@nestjs/jwt';
import { LoginModel } from './models/login.model';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(userData: LoginModel): Promise<{ accessToken: string }> {
    const accessToken = await this.generateToken(userData.email);
    return { accessToken }
  }

  async signIn(createUser: SignInModel): Promise<{ accessToken: string }> {
    const accessToken = await this.generateToken(createUser.email);
    return { accessToken }
  }

  private generateToken(userId: string): Promise<string> {
    return this.jwtService.signAsync({ sub: userId });
  }
}
