import { Component } from '@angular/core';
import {
    NotionPrerequisiteDialogComponent
} from '../../../../shared/dialogs/notion-prerequisite-dialog/notion-prerequisite-dialog.component';
import { filter, switchMap, tap } from 'rxjs';
import { NotionService } from '../../../../shared/services/notion.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'shitshup-notion-prerequisite',
    templateUrl: './notion-prerequisite.component.html',
    styleUrls: [ './notion-prerequisite.component.scss' ],
})
export class NotionPrerequisiteComponent {

    showProcessing: boolean = false;
    showDone: boolean = false;

    constructor(
        private readonly notionService: NotionService,
        private readonly dialog: MatDialog,
    ) {
    }

    createMediaLibrary(): void {
        const dialogRef = this.dialog.open(NotionPrerequisiteDialogComponent);

        dialogRef.afterClosed()
            .pipe(
                filter(result => !!result),
                tap(() => (this.showProcessing = true)),
                switchMap(() => this.notionService.createMediaLibrary()),
            )
            .subscribe(() => {
                this.showProcessing = false;
                this.showDone = true;
            });
    }
}
