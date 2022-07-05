import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HeroesService } from "./heroes.service";
import { HeroesController } from "./heroes.controller";
import { Heroes } from "./heroes.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Heroes])],
  providers: [HeroesService],
  controllers: [HeroesController],
})
export class HeroesModule {}
