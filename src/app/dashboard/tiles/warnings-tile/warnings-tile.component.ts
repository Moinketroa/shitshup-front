import { Component, OnInit } from '@angular/core';
import { WarningDto } from '../../../shared/dtos/warning.dto';
import { WarningService } from '../../../shared/services/warning.service';
import { WarningTreeNodeMapperService } from '../../../shared/mapper/warning-tree-node.mapper.service';
import { concat, filter, map, switchMap } from 'rxjs';
import { TreeNode } from 'primeng/api';
import { YoutubeService } from '../../../shared/services/youtube.service';
import {
    WarningNotificationWsService,
} from '../../../shared/web-sockets/warning-notification/warning-notification.ws.service';
import { MatDialog } from '@angular/material/dialog';
import { ProcessDialogComponent } from '../../../shared/dialogs/process-dialog/process-dialog.component';

@Component({
    selector: 'shitshup-warnings-tile',
    templateUrl: './warnings-tile.component.html',
    styleUrls: [ './warnings-tile.component.scss' ],
})
export class WarningsTileComponent implements OnInit {

    warnings: TreeNode<WarningDto>[] | null = [];

    constructor(private readonly warningService: WarningService,
                private readonly warningNotificationWsService: WarningNotificationWsService,
                private readonly youtubeService: YoutubeService,
                private readonly dialog: MatDialog,
                private readonly warningTreeNodeMapper: WarningTreeNodeMapperService) {

    }

    ngOnInit() {
        this.initWarnings();
        this.initWarningsNotifications();
    }

    initWarnings(): void {
        this.warningService.getWarnings()
            .pipe(
                map(warnings => warnings.map(warning => this.warningTreeNodeMapper.map(warning))),
            )
            .subscribe(warnings => {
                this.warnings = warnings;
            });
    }

    initWarningsNotifications(): void {
        this.warningNotificationWsService.sendMessage();

        concat(
            this.warningNotificationWsService.onMessage(),
        ).pipe(
            map(warning => this.warningTreeNodeMapper.map(warning)),
        ).subscribe(warning => {
            this.warnings?.push(warning);
            this.forceLoadData();
        });
    }

    private forceLoadData(): void {
        const temp = this.warnings;
        this.warnings = null;
        setTimeout(() => this.warnings = temp, 0);
    }

    replayProcessing(videoId: string): void {
        const dialogRef = this.dialog.open(ProcessDialogComponent, {
            data: { processOneVideo: true, uniqueVideoId: videoId },
        });

        dialogRef.afterClosed()
            .pipe(
                filter(result => !!result),
                switchMap(result => this.youtubeService.processVideos(result))
            )
            .subscribe();
    }

    deleteWarning(warningId: string): void {
        this.warningService.deleteWarning(warningId)
            .subscribe(() => {
                this.initWarnings();
            });
    }
}
