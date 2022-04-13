import * as React from "react";

export interface ITask {
    task: string;
    url: string;
}

export interface IAWSOptions {
    region: string | undefined,
    bucketName: string | undefined,
    accessKeyId: string | undefined,
    secretAccessKey: string | undefined
    signatureVersion: string | undefined
}

export interface ITaskState {
    task: ITask;
    isLoading: boolean;
    error: string;
    count: number;
}

export interface ITableState extends ITasks{
    isLoading: boolean;
    error: string;
    count: number;
}

export interface ITasks {
    tasks: Array<ITask>;
}

export interface IWrapperProps {
    children: React.ReactNode
}