import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarYoutubeConfigComponent } from './sidebar-youtube-config/sidebar-youtube-config.component';

export enum SidebarPath {
    YOUTUBE = 'youtube-config'
}

const routes: Routes = [
    {
        path: SidebarPath.YOUTUBE,
        component: SidebarYoutubeConfigComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
