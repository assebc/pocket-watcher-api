import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { env } from "src/shared/config/env";

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: env.jwtSecret,
    signOptions: { expiresIn: '7d'}
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule{}