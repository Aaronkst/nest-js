import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Heroes } from "./heroes.entity";
import { CreateHeroDto, EditHeroDto } from "./heroes.dtos";
import { IHero, IHeroesList } from "../lib/types/heroes";

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

  async getHeroById(id: string): Promise<IHero> {
    try {
      return await this.heroes.findOneByOrFail({ id });
    } catch (e) {
      throw e;
    }
  }

  async insertHero({ name, description }: CreateHeroDto): Promise<IHero> {
    try {
      const hero = new Heroes();
      hero.name = name;
      if (description) hero.description = description;
      return this.heroes.create(hero);
    } catch (e) {
      throw e;
    }
  }

  async updateHero({ id, name, description }: EditHeroDto): Promise<IHero> {
    try {
      const hero = await this.heroes.findOneBy({ id });
      if (name) hero.name = name;
      if (description) hero.description = description;
      return await this.heroes.save(hero);
    } catch (e) {
      throw e;
    }
  }

  async deleteHero(id: string): Promise<DeleteResult> {
    try {
      return await this.heroes.delete({ id });
    } catch (e) {
      throw e;
    }
  }
}
