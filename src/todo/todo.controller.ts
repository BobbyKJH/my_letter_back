import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
/** Service */
import { TodoService } from 'src/todo/todo.service';
/** Dto */
import { CreateTodoDto } from 'src/todo/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/todo/dto/update-todo.dto';

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Get("day")
  findDayAll() {
    return this.todoService.findDayAll();
  };

  @Get("week")
  findWeekAll() {
    return this.todoService.findWeekAll();
  };

  @Get("month")
  findMonthAll() {
    return this.todoService.findMonthAll();
  };

  @Get("year")
  findYearAll() {
    return this.todoService.findYearAll();
  };

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  };

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  };

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  };
}
