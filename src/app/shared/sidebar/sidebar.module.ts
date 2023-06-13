import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarYoutubeConfigComponent } from './sidebar-youtube-config/sidebar-youtube-config.component';
import { SidebarComponent } from './sidebar.component';
import { YoutubeUserIconModule } from '../components/youtube-user-icon/youtube-user-icon.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        SidebarYoutubeConfigComponent,
        SidebarComponent,
    ],
    imports: [
        CommonModule,
        SidebarRoutingModule,

        YoutubeUserIconModule,

        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        SidebarComponent,
    ],
})
export class SidebarModule {
}
