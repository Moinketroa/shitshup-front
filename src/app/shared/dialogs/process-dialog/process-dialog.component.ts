import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProcessDialogData } from '../../models/process-dialog-data.model';
import { NgIf } from '@angular/common';
import { ProcessRequest } from '../../dtos/process-request.dto';

@Component({
    selector: 'shitshup-process-dialog',
    templateUrl: './process-dialog.component.html',
    styleUrls: [ './process-dialog.component.scss' ],
    standalone: true,
    imports: [ FormsModule, ReactiveFormsModule, MatCheckboxModule, MatDialogModule, MatButtonModule, NgIf ],
})
export class ProcessDialogComponent implements OnInit {

    processOneVideo!: boolean;
    uniqueVideoId!: string;

    stepsSelected!: FormGroup;

    constructor(private readonly formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<ProcessDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ProcessDialogData,) {
    }

    ngOnInit() {
        this.processOneVideo = this.data.processOneVideo;
        this.uniqueVideoId = this.data.uniqueVideoId;

        this.stepsSelected = this.buildFormGroup(this.processOneVideo);
    }

    buildFormGroup(processOneVideo: boolean) {
        return this.formBuilder.group({
            step1: { value: !processOneVideo, disabled: true },
            step1Explicit: { value: !processOneVideo, disabled: processOneVideo },
            step2: { value: true, disabled: true },
            step3: { value: !processOneVideo, disabled: processOneVideo },
            step4: true,
            step5: true,
            step6: true,
            step7: true,
        });
    }

    cancel() {
        this.dialogRef.close();
    }

    process() {
        const rawValue = this.stepsSelected.getRawValue();

        const processRequest = <ProcessRequest>{
            processOneVideo: this.processOneVideo,
            uniqueVideoId: this.uniqueVideoId,

            doDeleteExplicitDuplicates: rawValue.step1Explicit,

            doDeleteFromPending: rawValue.step3,
            doFetchMusicAnalysisData: rawValue.step4,
            doPushResultsToNotion: rawValue.step5,
            doLinkNotionToDropbox: rawValue.step6,
            doPredictStems: rawValue.step7,
        }

        this.dialogRef.close(processRequest);
    }

    step4Change(checked: boolean) {
        this.manageDeps(checked, 'step5', 'step6');
    }

    step5Change(checked: boolean) {
        this.manageDeps(checked, 'step6');
    }

    step6Change(checked: boolean) {
        if (checked) {
            this.stepsSelected.get('step5')?.setValue(true);
        }
    }

    private manageDeps(checked: boolean, ...formControlNames: string[]) {
        if (!checked) {
            this.disableDeps(...formControlNames);
        } else {
            this.enableDeps(...formControlNames);
        }
    }
    private disableDeps(...formControlNames: string[]) {
        formControlNames.forEach(formControlName => {
            this.disableOneDeps(formControlName);
        })
    }

    private disableOneDeps(formControlName: string) {
        this.stepsSelected.get(formControlName)?.setValue(false);
        this.stepsSelected.get(formControlName)?.disable();
    }

    private enableDeps(...formControlNames: string[]) {
        formControlNames.forEach(formControlName => {
            this.enableOneDeps(formControlName);
        })
    }

    private enableOneDeps(formControlName: string) {
        this.stepsSelected.get(formControlName)?.enable();
    }
}
