import { IsEmail } from "class-validator";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { hash, compare } from "bcrypt";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

@Entity()
export class Users {
  @BeforeInsert()
  @BeforeUpdate()
  async bcryptPassword() {
    if (this.password) this.password = await hash(this.password, 16);
    return true;
  }

  async validatePassword(password: string): Promise<boolean> {
    const isValid = await compare(password, this.password);
    return isValid ? true : false;
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  password: string;

  @IsEmail()
  @Column({ unique: true })
  email: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;
}
