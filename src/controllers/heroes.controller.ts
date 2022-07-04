import { Controller, Get, Post } from "@nestjs/common";
import { HeroesService } from "../services/heroes.service";
import { IErrorResponse, ISuccessResponse } from "../interface/app.interface";
import { IHeroes, IHeroesList } from "src/interface/heroes.interface";

@Controller("api/heroes")
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  async getHeroes(): Promise<ISuccessResponse | IErrorResponse> {
    try {
      const heroes: IHeroesList | IHeroes =
        await this.heroesService.getHeroes();
      return {
        status: 200,
        total: heroes.total,
        data: heroes.data,
        timestamp: new Date().getTime(),
      };
    } catch (e) {
      return {
        status: 500,
        message: e.message,
      };
    }
  }
}
