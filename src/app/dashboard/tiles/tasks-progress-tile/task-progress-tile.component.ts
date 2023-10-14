import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../shared/services/task.service';
import { concatMap, map, tap } from 'rxjs';
import { isDefined, isNullOrUndefined } from '../../../shared/util/util';
import { TaskTreeNodeMapperService } from '../../../shared/mapper/task-tree-node.mapper.service';
import {
    TaskNotificationWsService
} from '../../../shared/web-sockets/task-notification/task-notification.ws.service';
import { TaskTreeNode } from '../../../shared/models/task-tree-node.model';

@Component({
  selector: 'shitshup-task-progress-tile',
  templateUrl: './task-progress-tile.component.html',
  styleUrls: ['./task-progress-tile.component.scss']
})
export class TaskProgressTileComponent implements OnInit {

    taskTrees: TaskTreeNode[] | null = null;

    constructor(private readonly taskTreeNodeMapper: TaskTreeNodeMapperService,
                private readonly taskService: TaskService,
                private readonly taskNotificationWebSocket: TaskNotificationWsService,) {
    }

    ngOnInit() {
        this.taskService.getTasks()
            .pipe(
                map(taskTree => (
                    taskTree.map((task: any) => this.taskTreeNodeMapper.map(task))
                )),
                tap(taskTreeNodes => {
                    this.taskTrees = taskTreeNodes
                }),
                concatMap(_ => {
                    this.taskNotificationWebSocket.sendMessage();
                    return this.taskNotificationWebSocket.onMessage();
                }),
                map(taskTreeNodeUpdate => (this.taskTreeNodeMapper.map(taskTreeNodeUpdate))),
            )
            .subscribe(taskTreeNodeUpdate => {
                console.log('Before push', taskTreeNodeUpdate.label);
                this.pushUpdatedTaskTreeNode(taskTreeNodeUpdate);
                console.log('After push', taskTreeNodeUpdate.label);

            });
    }

    loadData(): void {
        const temp = this.taskTrees;
        this.taskTrees = null;
        setTimeout(() => this.taskTrees = temp, 0);
    }

    private pushUpdatedTaskTreeNode(taskTreeNodeUpdate: TaskTreeNode): void {
        const taskTreeNodeFound = this.findTaskTreeNode(taskTreeNodeUpdate.id);

        if (isNullOrUndefined(taskTreeNodeFound)) {
            if (isNullOrUndefined(taskTreeNodeUpdate.parentId)) {
                console.log('push root node');
                this.taskTrees?.push(taskTreeNodeUpdate);
                this.loadData();
            } else {
                const taskTreeNodeUpdateParentFound = this.findTaskTreeNode(taskTreeNodeUpdate.parentId)!;

                if (isNullOrUndefined(taskTreeNodeUpdateParentFound.children)) {
                    taskTreeNodeUpdateParentFound.children = [];
                }

                taskTreeNodeUpdateParentFound.children?.push(taskTreeNodeUpdate);
            }
        } else {
            taskTreeNodeFound.progress = taskTreeNodeUpdate.progress;
            taskTreeNodeFound.hasFailed = taskTreeNodeUpdate.hasFailed;
        }
    }

    private findTaskTreeNode(taskTreeNodeId: string): TaskTreeNode | null {
        for (const taskTreeRootNode of this.taskTrees!) {
            const taskTreeNodeFound = this.searchTree(taskTreeRootNode, taskTreeNodeId);

            if (isDefined(taskTreeNodeFound)) {
                return taskTreeNodeFound;
            }
        }

        return null;
    }

    private searchTree(taskTreeNode: TaskTreeNode, matchingId: string): TaskTreeNode | null {
        if (taskTreeNode.id == matchingId) {
            return taskTreeNode;
        } else if (taskTreeNode.children != null) {
            let result = null;
            for (let i = 0; result == null && i < taskTreeNode.children.length; i++) {
                result = this.searchTree(taskTreeNode.children[i] as TaskTreeNode, matchingId);
            }
            return result;
        }
        return null;
    }
}
