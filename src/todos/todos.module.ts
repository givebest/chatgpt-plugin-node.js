import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [TodosService],
  exports: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
