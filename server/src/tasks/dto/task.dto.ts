import {IsNotEmpty, IsString} from 'class-validator';

export class TaskDto {
    @IsNotEmpty()
    @IsString()
    taskName: string;

    @IsString()
    urlPic: string;
}