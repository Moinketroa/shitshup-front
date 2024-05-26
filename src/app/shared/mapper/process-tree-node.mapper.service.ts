import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ProcessDto } from '../dtos/process.dto';
import { ProcessTrackDto } from '../dtos/process-track.dto';
import { ProcessStepDto } from '../dtos/process-step.dto';
import { ProcessNodeType } from '../models/process/process-node-type.enum';
import { ProcessStepData } from '../models/process/process-step-data.model';
import { ProcessTrackData } from '../models/process/process-track-data.model';

@Injectable({
    providedIn: 'root',
})
export class ProcessTreeNodeMapperService {

    constructor() {
    }

    mapProcess(process: ProcessDto): TreeNode {
        const processChildren = process.processTracks?.map(processTrack => this.mapProcessTrack(processTrack, process));

        const data = <any>{
            id: process.id,
            createdAt: process.createdAt,
            progress: this.calculateProgressProcess(processChildren?.map(processChildren => processChildren.data)),
        }

        return <TreeNode>{
            label: `PROCESSUS`,
            data: data,
            key: process.id,
            type: ProcessNodeType.ROOT,
            children: processChildren,
        };
    }

    private calculateProgressProcess(processTracksData: ProcessTrackData[] = []): number {
        if (processTracksData.length) {
            return 0;
        }

        const completedSteps = processTracksData.filter(trackData => trackData.hasCompleted || trackData.hasFailed).length;
        const totalSteps = processTracksData.length;

        return completedSteps / totalSteps;
    }

    mapProcessTrack(processTrack: ProcessTrackDto, processRoot: ProcessDto): TreeNode {
        const processTrackSteps = [
            this.mapProcessSteps(processTrack, processRoot)
        ];

        const data = <ProcessTrackData>{
            id: processTrack.id,
            createdAt: processTrack.createdAt,
            videoId: processTrack.videoId,
            hasCompleted: processTrack.hasCompleted,
            hasFailed: processTrack.hasFailed,
            progress: this.calculateProgressTrack(processTrackSteps[0].data!),
        }

        return <TreeNode>{
            label: processTrack.videoId,
            data: data,
            expanded: false,
            draggable: false,
            droppable: false,
            selectable: false,
            key: processTrack.id,
            type: ProcessNodeType.TRACK,
            children: processTrackSteps,
        };
    }

    private calculateProgressTrack(processStepsData: ProcessStepData[]): number {
        const completedSteps = processStepsData.filter(stepData => stepData.hasCompleted).length;
        const totalSteps = processStepsData.length;

        return completedSteps / totalSteps;
    }

    mapProcessSteps(processTrack: ProcessTrackDto, processRoot: ProcessDto): TreeNode<ProcessStepData[]> {
        const data = this.mapProcessStepsData(processTrack, processRoot);

        return <TreeNode<ProcessStepData[]>>{
            data: data,
            expanded: false,
            draggable: false,
            droppable: false,
            selectable: false,
            key: processTrack.id,
            type: ProcessNodeType.STEPS,
        };
    }

    mapProcessStepsData(processTrack: ProcessTrackDto, processRoot: ProcessDto): ProcessStepData[] {
        const data = [];

        if (processRoot.hasStep2) {
            data.push(this.createProcessStepData(processTrack.step2, 'STEP 2'));
        }
        if (processRoot.hasStep3) {
            data.push(this.createProcessStepData(processTrack.step3, 'STEP 3'));
        }
        if (processRoot.hasStep4) {
            data.push(this.createProcessStepData(processTrack.step4, 'STEP 4'));
        }
        if (processRoot.hasStep5) {
            data.push(this.createProcessStepData(processTrack.step5, 'STEP 5'));
        }
        if (processRoot.hasStep6) {
            data.push(this.createProcessStepData(processTrack.step6, 'STEP 6'));
        }
        if (processRoot.hasStep7) {
            data.push(this.createProcessStepData(processTrack.step7, 'STEP 7'));
        }

        return data;
    }

    createProcessStepData(processStep: ProcessStepDto | undefined, label: string): ProcessStepData {
        return <ProcessStepData>{
            label: label,
            hasStarted: !!processStep,
            hasCompleted: processStep?.hasCompleted,
            hasFailed: processStep?.hasFailed,
            createdAt: processStep?.createdAt,
            errorMessage: processStep?.errorMessage,
        }
    }
}
