import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

import { AppController } from "./app.controller";
import { HeroesModule } from "./modules/heroes.module";

import { AppService } from "./app.service";
import { Heroes } from "./entities/heroes.entity";

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
  entities: [Heroes],
  synchronize: true,
});

@Module({
  imports: [App, Database, HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
