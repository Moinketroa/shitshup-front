import { ProcessStepDto } from './process-step.dto';

export interface ProcessTrackDto {
    id: string;
    createdAt: string;
    videoId: string;
    hasCompleted: boolean;
    hasFailed: boolean;

    step2?: ProcessStepDto;
    step3?: ProcessStepDto;
    step4?: ProcessStepDto;
    step5?: ProcessStepDto;
    step6?: ProcessStepDto;
    step7?: ProcessStepDto;
}
