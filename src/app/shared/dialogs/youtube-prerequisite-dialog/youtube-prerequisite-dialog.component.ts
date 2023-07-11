import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'shitshup-youtube-prerequisite-dialog',
    templateUrl: './youtube-prerequisite-dialog.component.html',
    styleUrls: [ './youtube-prerequisite-dialog.component.scss' ],
    standalone: true,
    imports: [ MatDialogModule, MatButtonModule ],
})
export class YoutubePrerequisiteDialogComponent {

}
