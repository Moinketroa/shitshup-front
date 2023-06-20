import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarYoutubeConfigComponent } from './sidebar-youtube-config/sidebar-youtube-config.component';
import { SidebarComponent } from './sidebar.component';
import { YoutubeUserIconModule } from '../components/youtube-user-icon/youtube-user-icon.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarNotionConfigComponent } from './sidebar-notion-config/sidebar-notion-config.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { CreateNotionConfigSectionComponent } from './sidebar-notion-config/create-notion-config-section/create-notion-config-section.component';
import { UpdateNotionConfigSectionComponent } from './sidebar-notion-config/update-notion-config-section/update-notion-config-section.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
    declarations: [
        SidebarYoutubeConfigComponent,
        SidebarComponent,
        SidebarNotionConfigComponent,
        CreateNotionConfigSectionComponent,
        UpdateNotionConfigSectionComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        SidebarRoutingModule,

        YoutubeUserIconModule,

        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatCheckboxModule,
    ],
    exports: [
        SidebarComponent,
    ],
})
export class SidebarModule {
}
