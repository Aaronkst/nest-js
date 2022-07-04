/*import { Test, TestingModule } from "@nestjs/testing";
import { HeroesController } from "./heroes.controller";
import { HeroesService } from "../services/heroes.service";

import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { Heroes } from "../entities/heroes.entity";

describe("HeroesController", () => {
  let heroesController: HeroesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Heroes]), DataSource],
      controllers: [HeroesController],
      providers: [HeroesService],
    }).compile();

    heroesController = app.get<HeroesController>(HeroesController);
  });

  describe("list", () => {
    it("status should be 200", async () => {
      const heroes = await heroesController.getHeroes();
      expect(heroes.status).toBe(200);
    });
  });
});
*/
