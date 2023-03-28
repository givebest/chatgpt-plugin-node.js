import { Controller, Get, Body, Post, Delete, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateTodosDto } from './dto/create-todos.dto';
import { GetTodosDto } from './dto/get-todos.dto';
import { DelTodosDto } from './dto/del-todos.dto';

@ApiTags('todos')
@Controller('todos/')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({ summary: 'add todo' })
  async crate(@Body() createTodosDto: CreateTodosDto) {
    return await this.todosService.addTodo(createTodosDto.username);
  }

  @Get(':username')
  @ApiOperation({ summary: 'get todos' })
  async getTodos(@Param() getTodosDto: GetTodosDto) {
    return await this.todosService.getTodos(getTodosDto.username);
  }

  @Delete(':username')
  @ApiOperation({ summary: 'delete todo' })
  async delTodo(@Body() delTodosDto: DelTodosDto) {
    return await this.todosService.delTodo(delTodosDto.username);
  }
}
