import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'shitshup-notion-prerequisite-dialog',
    templateUrl: './notion-prerequisite-dialog.component.html',
    styleUrls: [ './notion-prerequisite-dialog.component.scss' ],
    standalone: true,
    imports: [ MatDialogModule, MatButtonModule ],
})
export class NotionPrerequisiteDialogComponent {

}
