import { ProcessTrackDto } from './process-track.dto';

export interface ProcessDto {
    id: string;
    createdAt: string;
    processTracks: ProcessTrackDto[];

    hasStep2: boolean;
    hasStep3: boolean;
    hasStep4: boolean;
    hasStep5: boolean;
    hasStep6: boolean;
    hasStep7: boolean;
}
