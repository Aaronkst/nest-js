export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export interface IUser {
  id: string;
  name: string;
  password: string;
  email: string;
  role: UserRole;
}

export interface IUserPublic {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface IUserInsert {
  name: string;
  password: string;
  email: string;
  role?: UserRole;
}
