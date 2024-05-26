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
import { TreeTableModule } from 'primeng/treetable';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TableModule } from 'primeng/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProcessOneVideoTileComponent } from './tiles/process-one-video-tile/process-one-video-tile.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProcessProgressTileComponent } from './tiles/process-progress-tile/process-progress-tile.component';
import { ProcessStepsProgressComponent } from './tiles/process-progress-tile/process-steps-progress/process-steps-progress.component';

@NgModule({
    declarations: [
        DashboardComponent,
        PrerequisitesTileComponent,
        NotionPrerequisiteComponent,
        YoutubePrerequisiteComponent,
        ProcessPendingsTileComponent,
        ProcessOneVideoTileComponent,
        WelcomeComponent,
        ProcessProgressTileComponent,
        ProcessStepsProgressComponent,
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
        MatInputModule,
        ReactiveFormsModule,
    ],
})
export class DashboardModule {
}
