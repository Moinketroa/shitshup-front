import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeUserIconComponent } from './youtube-user-icon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        YoutubeUserIconComponent,
    ],
    imports: [
        CommonModule,

        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        YoutubeUserIconComponent,
    ]
})
export class YoutubeUserIconModule {
}
