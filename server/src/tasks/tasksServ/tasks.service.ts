import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {TaskEntity} from "../../entities/task.entity";
import {Repository} from "typeorm";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly tasksRepository: Repository<TaskEntity>
    ) {}

    async addTask(task: ITask): Promise<any> {
        try {
            return await this.tasksRepository.create(task)
        } catch (err) {
            throw new BadRequestException(err)
        }
    }

    async  findAll(): Promise<TaskEntity[]> {
        try {
            return await this.tasksRepository.find();
        } catch (err) {
            throw new BadRequestException(err)
        }
    }

}
