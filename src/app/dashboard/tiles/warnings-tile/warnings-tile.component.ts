import { Component, OnInit } from '@angular/core';
import { WarningDto } from '../../../shared/dtos/warning.dto';
import { WarningService } from '../../../shared/services/warning.service';
import { WarningTreeNodeMapperService } from '../../../shared/mapper/warning-tree-node.mapper.service';
import { map } from 'rxjs';
import { TreeNode } from 'primeng/api';
import { YoutubeService } from '../../../shared/services/youtube.service';

@Component({
  selector: 'shitshup-warnings-tile',
  templateUrl: './warnings-tile.component.html',
  styleUrls: ['./warnings-tile.component.scss']
})
export class WarningsTileComponent implements OnInit {

    warnings: TreeNode<WarningDto>[] | null = null;

    constructor(private readonly warningService: WarningService,
                private readonly youtubeService: YoutubeService,
                private readonly warningTreeNodeMapper: WarningTreeNodeMapperService) {

    }

    ngOnInit() {
        this.initWarnings();
    }

    initWarnings(): void {
        this.warningService.getWarnings()
            .pipe(
                map(warnings => warnings.map(warning => this.warningTreeNodeMapper.map(warning)))
            )
            .subscribe(warnings => {
                this.warnings = warnings;
            });
    }

    replayProcessing(videoId: string): void {
        this.youtubeService.processOneVideo(videoId)
            .subscribe();
    }

    deleteWarning(warningId: string): void {
        this.warningService.deleteWarning(warningId)
            .subscribe(() => {
                this.initWarnings();
            });
    }
}
