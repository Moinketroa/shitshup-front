export interface YoutubeUser {
    id?: string;
    googleId: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    photoUrl: string;
    pendingPlaylistId: string;
    processedPlaylistId: string;
    waitingPlaylistId: string;
}

export class NullYoutubeUser implements YoutubeUser {
    googleId = '';
    email = '';
    firstName = '';
    lastName = '';
    displayName = '';
    photoUrl = '';
    pendingPlaylistId = '';
    processedPlaylistId = '';
    waitingPlaylistId = '';
}
