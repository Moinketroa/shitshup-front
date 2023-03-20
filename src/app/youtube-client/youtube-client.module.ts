import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeClientRoutingModule } from './youtube-client-routing.module';
import { YoutubeClientComponent } from './youtube-client.component';


@NgModule({
    declarations: [
        YoutubeClientComponent
    ],
    imports: [
        CommonModule,
        YoutubeClientRoutingModule
    ]
})
export class YoutubeClientModule {
}
