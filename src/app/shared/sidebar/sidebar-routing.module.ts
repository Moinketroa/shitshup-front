import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarYoutubeConfigComponent } from './sidebar-youtube-config/sidebar-youtube-config.component';
import { SidebarNotionConfigComponent } from './sidebar-notion-config/sidebar-notion-config.component';
import { SidebarDropboxConfigComponent } from './sidebar-dropbox-config/sidebar-dropbox-config.component';

export enum SidebarPath {
    YOUTUBE = 'youtube-config',
    NOTION = 'notion-config',
    DROPBOX = 'dropbox-config',
}

const routes: Routes = [
    {
        path: SidebarPath.YOUTUBE,
        component: SidebarYoutubeConfigComponent,
    },
    {
        path: SidebarPath.NOTION,
        component: SidebarNotionConfigComponent,
    },
    {
        path: SidebarPath.DROPBOX,
        component: SidebarDropboxConfigComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
