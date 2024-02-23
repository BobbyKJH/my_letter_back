import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
/** Enum */
import { todoTimeEnum } from "src/todo/const/todo.const";
import { UserModel } from "src/user/entities/user.entity";

@Entity("todo")
export class TodoModel {
  @PrimaryGeneratedColumn()
  id: string;
  
  @Column({ type: "varchar", length: 100 })
  title: string;
  
  @Column("text")
  content: string;
  
  @CreateDateColumn()
  createAt: Date;

  // @Column({ type: "int" })
  @JoinColumn()
  @OneToOne(() => UserModel)
  writeId: number;

  @Column({ type: "enum", enum: todoTimeEnum })
  time: string;
}
