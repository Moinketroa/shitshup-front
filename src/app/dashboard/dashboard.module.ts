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

@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,

        YoutubeUserIconModule,

        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        NotionConfigIconModule,
    ],
})
export class DashboardModule {
}
