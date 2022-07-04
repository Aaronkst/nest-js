export interface IHeroes {
  id: string;
  name: string;
  description?: string;
  level: number;
}

export interface IHeroesQuery {
  id?: string;
  name?: string;
  level?: number;
}

export interface IHeroesList {
  total: number;
  data: Array<IHeroes>;
}
