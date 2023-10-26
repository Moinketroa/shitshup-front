export interface ProcessRequest {
    processOneVideo: boolean;
    uniqueVideoId: string;

    doDeleteExplicitDuplicates: boolean;

    doFetchMusicAnalysisData: boolean;
    doDeleteFromPending: boolean;
    doPushResultsToNotion: boolean;
    doPredictStems: boolean;
    doLinkNotionToDropbox: boolean;
}
