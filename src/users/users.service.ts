import { Injectable } from "@nestjs/common";
import { IUser, IUserInsert } from "./users.interface";

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "./users.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private users: Repository<Users>,
  ) {}

  async registerUser({
    name,
    password,
    email,
    role,
  }: IUserInsert): Promise<IUser> {
    try {
      const user = new Users();
      user.name = name;
      user.password = password;
      user.email = email;
      user.role = role;
      return this.users.save(user);
    } catch (e) {
      throw e;
    }
  }

  async validateUser(email: string, password: string): Promise<IUser> {
    try {
      const user = await this.users.findOneBy({ email });
      if (!user) throw new Error("Invalid User");
      const isValid: boolean = await user.validatePassword(password);
      if (!isValid) throw new Error("Invalid Password");
      return user;
    } catch (e) {
      throw e;
    }
  }
}
