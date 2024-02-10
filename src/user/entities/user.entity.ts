import { TodoModel } from "src/todo/entities/todo.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_info")
export class UserModel {
  @PrimaryGeneratedColumn("uuid")
  @OneToOne(() => TodoModel, (todo) => todo.writeId)
  id: number;

  @Column()
  userName: string;

  @Column({ unique: true })
  nickName: string;

  @Column()
  password: string;
}
