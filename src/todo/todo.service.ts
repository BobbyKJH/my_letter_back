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
import { sha256 } from 'js-sha256';

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

  async findDayAll(id: string) {
    const findDay = await this.todoRepository.find({
      where: {
        time: todoTimeEnum.DAY,
        id: sha256(id)
      }
    });

    return findDay;
  }

  async findWeekAll(id: string) {
    const findWeek = await this.todoRepository.find({
      where: {
        time: todoTimeEnum.WEEK,
        id: sha256(id)
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

  findOne(id: string) {
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
