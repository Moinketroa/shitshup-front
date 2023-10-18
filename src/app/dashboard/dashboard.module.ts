import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { YoutubeUserIconModule } from '../shared/components/youtube-user-icon/youtube-user-icon.module';
import { NotionConfigIconModule } from '../shared/components/notion-config-icon/notion-config-icon.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { PrerequisitesTileComponent } from './tiles/prerequisites-tile/prerequisites-tile.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotionPrerequisiteComponent } from './tiles/prerequisites-tile/notion-prerequisite/notion-prerequisite.component';
import { YoutubePrerequisiteComponent } from './tiles/prerequisites-tile/youtube-prerequisite/youtube-prerequisite.component';
import { ProcessPendingsTileComponent } from './tiles/process-pendings-tile/process-pendings-tile.component';
import { PlaylistItemsTitlesPreviewPipe } from '../shared/pipes/playlist-items-titles-preview.pipe';
import { TaskProgressTileComponent } from './tiles/tasks-progress-tile/task-progress-tile.component';
import { TreeTableModule } from 'primeng/treetable';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { WarningsTileComponent } from './tiles/warnings-tile/warnings-tile.component';
import { TableModule } from 'primeng/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        DashboardComponent,
        PrerequisitesTileComponent,
        NotionPrerequisiteComponent,
        YoutubePrerequisiteComponent,
        ProcessPendingsTileComponent,
        TaskProgressTileComponent,
        WarningsTileComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,

        YoutubeUserIconModule,

        MatButtonModule,
        MatIconModule,
        NotionConfigIconModule,
        MatGridListModule,
        MatCardModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        PlaylistItemsTitlesPreviewPipe,
        TreeTableModule,
        TableModule,
        MatProgressBarModule,
        MatTooltipModule,
    ],
})
export class DashboardModule {
}
