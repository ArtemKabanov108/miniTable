import {Body, Controller, Get, Res, HttpStatus, Post} from '@nestjs/common';
import {TaskDto} from "../dto/task.dto";
import {TasksService} from "../tasksServ/tasks.service";
import {Response} from "express";

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}
    @Get('/getAll')
    async getAllTasks(@Res() res: Response,): Promise<Response> {
       const tasksArr = await this.taskService.findAll()
        return res.status(HttpStatus.OK).json(tasksArr);
    }

    @Post('/add-task')
    async addTaskCtrl(
        @Body() body: TaskDto,
        @Res() res: Response,
    ): Promise<Response>{
        const tasksArr = await this.taskService.addTask(body)
        return res.status(HttpStatus.OK).json(tasksArr);
    }
}
