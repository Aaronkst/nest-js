import { Injectable } from "@nestjs/common";
import {
  IHeroes,
  IHeroesQuery,
  IHeroesList,
} from "../interface/heroes.interface";

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Heroes } from "../entities/heroes.entity";

@Injectable()
export class HeroesService {
  constructor(
    @InjectRepository(Heroes)
    private heroes: Repository<Heroes>,
  ) {}

  async getHeroes(): Promise<IHeroesList> {
    try {
      const [data, total] = await this.heroes.findAndCount();
      return { total, data };
    } catch (e) {
      throw e;
    }
  }

  async insertHero({ id, name, description }: IHeroes): Promise<IHeroes> {
    try {
      const hero = await this.heroes.save({ id, name, description });
      return hero;
    } catch (e) {
      throw e;
    }
  }
}
