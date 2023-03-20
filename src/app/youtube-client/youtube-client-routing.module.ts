import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeClientComponent } from './youtube-client.component';

const routes: Routes = [
    {
        path: '',
        component: YoutubeClientComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YoutubeClientRoutingModule {
}
