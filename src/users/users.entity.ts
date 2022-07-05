import { IsEmail } from "class-validator";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterInsert,
  AfterUpdate,
} from "typeorm";
import { hash, compare } from "bcrypt";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

@Entity()
export class Users {
  @BeforeUpdate()
  @BeforeInsert()
  async bcryptPassword() {
    this.password = await hash(this.password, 10);
  }

  @AfterInsert()
  @AfterUpdate()
  async removePassword() {
    if (this.password) delete this.password;
  }

  async validatePassword(password: string): Promise<boolean> {
    const isValid = await compare(password, this.password);
    return isValid ? true : false;
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
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
