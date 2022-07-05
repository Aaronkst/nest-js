import { Module, forwardRef } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsersService } from "src/users/users.service";
import { UsersModule } from "../users/users.module";
import { LocalStrategy } from "./auth.local.strategy";
import { AuthService } from "./auth.service";

@Module({
  imports: [forwardRef(() => UsersModule), PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
