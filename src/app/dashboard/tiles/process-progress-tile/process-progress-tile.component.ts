import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../../../shared/services/process.service';
import { concat, map, tap } from 'rxjs';
import { ProcessTreeNodeMapperService } from '../../../shared/mapper/process-tree-node.mapper.service';
import { TreeNode } from 'primeng/api';
import { ProcessNodeType } from '../../../shared/models/process/process-node-type.enum';
import {
    VerticalProcessNotificationWsService
} from '../../../shared/web-sockets/vertical-process-notification/vertical-process-notification.ws.service';
import { ProcessDto } from '../../../shared/dtos/process.dto';
import { ProcessTrackDto } from '../../../shared/dtos/process-track.dto';
import { DateTime } from 'luxon';

@Component({
  selector: 'shitshup-process-progress-tile',
  templateUrl: './process-progress-tile.component.html',
  styleUrls: ['./process-progress-tile.component.scss']
})
export class ProcessProgressTileComponent implements OnInit {

    processTreeNodes: TreeNode[] = [];

    ProcessNodeType = ProcessNodeType;

    DateTime = DateTime;

    constructor(private readonly processTreeNodeMapper: ProcessTreeNodeMapperService,
                private readonly verticalProcessNotificationWsService: VerticalProcessNotificationWsService,
                private readonly processService: ProcessService) {
    }

    ngOnInit() {
        this.initProcesses();
        this.initProcessesNotification();
    }

    private initProcesses() {
        this.processService.getProcesses()
            .pipe(
                map(processes => processes.map(process => this.processTreeNodeMapper.mapProcess(process))),
                tap(processTreeNodes => this.processTreeNodes = processTreeNodes),
            )
            .subscribe();
    }

    private initProcessesNotification() {
        this.verticalProcessNotificationWsService.sendMessage();

        concat(
            this.verticalProcessNotificationWsService.onMessage(),
        ).subscribe(process => {
            this.includeProcess(process);
            this.forceLoadData();
        });
    }

    private forceLoadData(): void {
        this.processTreeNodes = [ ...this.processTreeNodes ];
    }

    private includeProcess(process: ProcessDto) {
        const processNodeFound = this.processTreeNodes.find(processTreeNode => processTreeNode.key === process.id);

        if (!processNodeFound) {
            this.processTreeNodes.push(this.processTreeNodeMapper.mapProcess(process));
        } else {
            const processTrack = process.processTracks[0];

            this.includeProcessTrack(processNodeFound, processTrack, process);
        }
    }

    private includeProcessTrack(processTreeNode: TreeNode, processTrack: ProcessTrackDto, processRoot: ProcessDto) {
        const processTrackNodeFound = processTreeNode.children?.find(processTrackTreeNode => processTrackTreeNode.key === processTrack.id);

        const processTrackTreeNodeMapped = this.processTreeNodeMapper.mapProcessTrack(processTrack, processRoot);

        if (!processTrackNodeFound) {
            if (!!processTreeNode.children) {
                processTreeNode.children.push(processTrackTreeNodeMapped);
            } else {
                processTreeNode.children = [processTrackTreeNodeMapped];
            }
        } else {
            processTrackNodeFound.data = processTrackTreeNodeMapped.data;
            processTrackNodeFound.children = processTrackTreeNodeMapped.children;
        }
    }
}
