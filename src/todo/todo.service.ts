import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
/** Entity */
import { TodoModel } from 'src/todo/entities/todo.entity';
/** Dto */
import { CreateTodoDto } from 'src/todo/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/todo/dto/update-todo.dto';
/** Enum */
import { todoTimeEnum } from 'src/todo/const/todo.const';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoModel)
    private readonly todoRepository: Repository<TodoModel>
  ) {}

  async createTodo(createTodoDto: CreateTodoDto) {
    const createTodo = this.todoRepository.create({ ...createTodoDto });

    const saveTodo = await this.todoRepository.save(createTodo);

    return saveTodo;
  }

  async findDayAll() {
    const findDay = await this.todoRepository.find({
      where: {
        time: todoTimeEnum.DAY
      }
    });

    return findDay;
  }

  async findWeekAll() {
    const findWeek = await this.todoRepository.find({
      where: {
        time: todoTimeEnum.WEEK
      }
    });

    return findWeek;
  }

  async findMonthAll() {
    const findMonth = await this.todoRepository.find({
      where: {
        time: todoTimeEnum.MONTH
      }
    });

    return findMonth;
  }

  async findYearAll() {
    const findYear = await this.todoRepository.find({
      where: {
        time: todoTimeEnum.YEAR
      }
    });

    return findYear;
  }

  findOne(id: number) {
    const findOne = this.todoRepository.findOne({
      where: { id: id }
    })

    return findOne;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
