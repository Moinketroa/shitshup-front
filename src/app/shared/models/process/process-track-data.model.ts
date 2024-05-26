export interface ProcessTrackData {
    id: string;
    createdAt: string;
    videoId: string;
    hasCompleted: boolean;
    hasFailed: boolean;
    progress: number;
}
