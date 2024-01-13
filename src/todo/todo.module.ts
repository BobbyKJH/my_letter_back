import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/** Controller */
import { TodoController } from 'src/todo/todo.controller';
/** Service */
import { TodoService } from 'src/todo/todo.service';
/** Entity */
import { TodoModel } from 'src/todo/entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoModel])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
