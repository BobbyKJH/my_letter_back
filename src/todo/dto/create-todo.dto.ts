import { todoTimeEnum } from "src/todo/const/todo.const";

export class CreateTodoDto {
  title: string;

  content: string;

  writeId: number;

  time: todoTimeEnum;
}
