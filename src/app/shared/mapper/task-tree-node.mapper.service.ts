import { Injectable } from '@angular/core';
import { TaskDto } from '../dtos/task.dto';
import { TaskTreeNode } from '../models/task-tree-node.model';
import { isDefined } from '../util/util';

@Injectable({
    providedIn: 'root',
})
export class TaskTreeNodeMapperService {
    constructor() {
    }

    map(task: TaskDto): TaskTreeNode {
        const taskProgress = this.calculateProgress(task);
        let taskTreeNodeChildren: TaskTreeNode[] | undefined = undefined;

        if (isDefined(task.children) && task.children.length !== 0) {
            taskTreeNodeChildren = task.children.map(child => this.map(child))
        }

        const taskTreeNode : TaskTreeNode = {
            id: task.id,
            label: task.name,
            data: task,
            children: taskTreeNodeChildren,
            expanded: false,
            draggable: false,
            droppable: false,
            selectable: false,
            key: task.id,
            hasFailed: task.hasFailed,
            progress: taskProgress,
            parentId: task.parentId,
        }

        taskTreeNode.data = taskTreeNode;

        return taskTreeNode;
    }

    calculateProgress(task: TaskDto): number {
        const baseProgress = task.tasksDone / task.totalTasks;

        let additionalProgress = 0

        if (isDefined(task.children) && task.children.length !== 0) {
            additionalProgress = task.children.filter(child => {
                return child.totalTasks !== child.tasksDone;
            })
                .map(child => {
                    const childProgress = this.calculateProgress(child);

                    return childProgress / (1 / task.totalTasks);
                })
                .reduce(
                    (childProgress, acc) => acc + childProgress,
                    0,
                );
        }

        return baseProgress + additionalProgress;
    }


}
