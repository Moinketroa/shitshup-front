export interface ProcessStepData {
    label: string;
    hasStarted: boolean;
    hasCompleted: boolean;
    hasFailed: boolean;
    createdAt: string;
    errorMessage: string;
}
