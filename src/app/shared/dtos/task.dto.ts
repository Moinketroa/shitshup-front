export interface TaskDto {
    id: string;
    name: string;
    tasksDone: number;
    totalTasks: number;
    hasFailed: boolean;
    children: TaskDto[];
    parentId: string;
    createDate: string;
}
