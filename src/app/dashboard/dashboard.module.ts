import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
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

@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent,
        PrerequisitesTileComponent,
        NotionPrerequisiteComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,

        YoutubeUserIconModule,

        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        NotionConfigIconModule,
        MatGridListModule,
        MatCardModule,
        MatDialogModule,
        MatProgressSpinnerModule,
    ],
})
export class DashboardModule {
}
