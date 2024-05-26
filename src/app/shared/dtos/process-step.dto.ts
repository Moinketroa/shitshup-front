export interface ProcessStepDto {
    id: string;
    createdAt: string;
    hasCompleted: boolean;
    hasFailed: boolean;
    errorMessage?: string;
}
