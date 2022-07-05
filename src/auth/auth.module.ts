import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "../users/users.module";
import { LocalStrategy } from "./auth.local.strategy";
import { AuthService } from "./auth.service";

const App: DynamicModule = ConfigModule.forRoot({
  envFilePath: ".env",
});

const JWT = JwtModule.register({
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: "24h" },
});

@Module({
  imports: [App, UsersModule, PassportModule, JWT],
  exports: [AuthService],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
