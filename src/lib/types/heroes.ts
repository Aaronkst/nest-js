export interface IHero {
  id: string;
  name: string;
  description?: string;
  level: number;
}

export interface IHeroesList {
  total: number;
  data: IHero[];
}
