import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Heroes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 1 })
  level: number;
}
