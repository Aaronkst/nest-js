import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HeroesService } from "../services/heroes.service";
import { HeroesController } from "../controllers/heroes.controller";
import { Heroes } from "../entities/heroes.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Heroes])],
  providers: [HeroesService],
  controllers: [HeroesController],
})
export class HeroesModule {}
