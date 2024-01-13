import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
/** Enum */
import { todoTimeEnum } from "src/todo/const/todo.const";

@Entity("todo")
export class TodoModel {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 100 })
  title: string;

  @Column("text")
  content: string;

  @CreateDateColumn()
  createAt: Date;

  @Column({ type: "int" })
  writeId: string;

  @Column({ type: "enum", enum: todoTimeEnum })
  time: string;

  @Column({ type: "int" })
  view: number;
}
