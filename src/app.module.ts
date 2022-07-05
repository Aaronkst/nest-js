import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { HeroesModule } from "./heroes/heroes.module";
import { UsersModule } from "./users/users.module";

import { AppService } from "./app.service";
import { Heroes } from "./heroes/heroes.entity";
import { Users } from "./users/users.entity";
import { AuthModule } from './auth/auth.module';

const App: DynamicModule = ConfigModule.forRoot({
  envFilePath: ".env",
});

const Database: DynamicModule = TypeOrmModule.forRoot({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "postgres",
  entities: [Heroes, Users],
  synchronize: true,
});

@Module({
  imports: [App, Database, HeroesModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
