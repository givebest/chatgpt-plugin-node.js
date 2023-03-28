import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  async addTodo(username: string) {
    return {
      message: `Hello ${username}!`,
    };
  }

  async getTodos(username: string) {
    return {
      message: `Hello ${username}!`,
    };
  }

  async delTodo(username: string) {
    return {
      message: `Hello ${username}!`,
    };
  }
}
