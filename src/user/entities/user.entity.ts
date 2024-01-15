import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_info")
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;
}