import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_info")
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column({ unique: true })
  nickName: string;

  @Column()
  password: string;
}
