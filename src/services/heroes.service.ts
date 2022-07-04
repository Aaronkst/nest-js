import { Injectable } from "@nestjs/common";
import {
  IHeroes,
  IHeroesList,
  IHeroInsert,
  IHeroUpdate,
} from "../interface/heroes.interface";

import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
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

  async getHeroById(id: string): Promise<IHeroes> {
    try {
      return await this.heroes.findOneByOrFail({ id });
    } catch (e) {
      throw e;
    }
  }

  async insertHero({ name, description }: IHeroInsert): Promise<IHeroes> {
    try {
      return await this.heroes.save({ name, description });
    } catch (e) {
      throw e;
    }
  }

  async updateHero({ id, name, description }: IHeroUpdate): Promise<IHeroes> {
    try {
      const hero = await this.heroes.findOneByOrFail({ id });
      if (name) hero.name = name;
      if (description) hero.description = description;
      return await this.heroes.save(hero);
    } catch (e) {
      throw e;
    }
  }

  async deleteHero({ id }: IHeroUpdate): Promise<DeleteResult> {
    try {
      return await this.heroes.delete({ id });
    } catch (e) {
      throw e;
    }
  }
}
