import {
  Controller,
  Body,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { HeroesService } from "./heroes.service";
import { ISuccessResponse } from "../app.interface";
import { IHeroesList } from "./heroes.interface";
import { CreateHeroDto, DeleteHeroDto, EditHeroDto } from "./heroes.dtos";
import { ApiParam } from "@nestjs/swagger";

@Controller("api/heroes")
export class HeroesController {
  constructor(private readonly heroes: HeroesService) {}

  @Get()
  async getHeroes(): Promise<ISuccessResponse> {
    try {
      const heroes: IHeroesList = await this.heroes.getHeroes();
      return {
        status: "success",
        total: heroes.total,
        data: heroes.data,
        timestamp: new Date().getTime(),
      };
    } catch (e) {
      throw new HttpException(
        "Internal Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @ApiParam({
    name: "id",
    description: "Hero Id",
    example: "e5bb079a-419e-4edf-855e-eeee9f7b5916",
  })
  @Get(":id")
  async getHeroById(@Param("id") id: string): Promise<ISuccessResponse> {
    try {
      return {
        status: "success",
        data: await this.heroes.getHeroById(id),
        timestamp: new Date().getTime(),
      };
    } catch (e) {
      throw new HttpException(
        "Internal Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post("/insert")
  async addHero(@Body() payload: CreateHeroDto): Promise<ISuccessResponse> {
    try {
      return {
        status: "success",
        data: await this.heroes.insertHero({
          ...payload,
        }),
        timestamp: new Date().getTime(),
      };
    } catch (e) {
      throw new HttpException(
        "Internal Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post("/update")
  async updateHero(@Body() payload: EditHeroDto): Promise<ISuccessResponse> {
    if (!payload.name && !payload.description)
      throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
    try {
      return {
        status: "success",
        data: await this.heroes.updateHero({
          ...payload,
        }),
        timestamp: new Date().getTime(),
      };
    } catch (e) {
      throw new HttpException(
        "Internal Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post("/delete")
  async deleteHero(@Body() payload: DeleteHeroDto): Promise<ISuccessResponse> {
    try {
      return {
        status: "success",
        data: await this.heroes.deleteHero(payload.id),
        timestamp: new Date().getTime(),
      };
    } catch (e) {
      throw new HttpException(
        "Internal Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
