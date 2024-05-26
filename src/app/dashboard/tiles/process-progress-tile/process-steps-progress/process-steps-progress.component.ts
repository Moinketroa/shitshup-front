import { Component, Input } from '@angular/core';
import { ProcessStepData } from '../../../../shared/models/process/process-step-data.model';

@Component({
  selector: 'shitshup-process-steps-progress',
  templateUrl: './process-steps-progress.component.html',
  styleUrls: ['./process-steps-progress.component.scss']
})
export class ProcessStepsProgressComponent {

    @Input()
    processStepsData: ProcessStepData[] = [];

}
