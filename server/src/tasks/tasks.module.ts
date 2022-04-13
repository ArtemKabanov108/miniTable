import { Module } from '@nestjs/common';
import { TasksController } from './tasksCtrl/tasks.controller';
import { TasksService } from './tasksServ/tasks.service';
import {TaskEntity} from "../entities/task.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
