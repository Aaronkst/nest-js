import { UserRole } from "./users.entity";

export interface IUser {
  id: string;
  name: string;
  password: string;
  email: string;
  role: UserRole;
}

export interface IUserInsert {
  name: string;
  password: string;
  role?: UserRole;
}
