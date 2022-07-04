import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { HeroesModule } from "./modules/heroes.module";

import { AppService } from "./app.service";
import { Heroes } from "./entities/heroes.entity";

const app: DynamicModule = ConfigModule.forRoot({
  envFilePath: ".env",
});

const db: DynamicModule = TypeOrmModule.forRoot({
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
  imports: [app, db, HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
