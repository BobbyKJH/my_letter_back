import { Module } from '@nestjs/common';
/** Service */
import { TodoService } from 'src/todo/todo.service';
/** Controller */
import { TodoController } from 'src/todo/todo.controller';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
