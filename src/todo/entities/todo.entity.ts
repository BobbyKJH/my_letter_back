import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
/** Enum */
import { todoTimeEnum } from "src/todo/const/todo.const";

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

  @Column({ type: "int" })
  writeId: number;

  @Column({ type: "enum", enum: todoTimeEnum })
  time: string;
}
