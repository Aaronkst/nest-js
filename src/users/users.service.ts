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

  async registerUser({ name, password, role }: IUserInsert): Promise<IUser> {
    try {
      return this.users.create({ name, password, role });
    } catch (e) {
      throw e;
    }
  }

  async validateUser(email: string, password: string): Promise<IUser> {
    try {
      const user = await this.users.findOneByOrFail({ email });
      if (!user) throw new Error("Invalid User");
      const isValid: boolean = await user.validatePassword(password);
      if (!isValid) throw new Error("Invalid Password");
      return user;
    } catch (e) {
      throw e;
    }
  }
}
