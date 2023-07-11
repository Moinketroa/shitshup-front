export interface YoutubePlaylist {
    id?: string;
    title: string;
    description: string;
    thumbnailUrl: string;
}

export class NullYoutubePlaylist implements YoutubePlaylist {
    title = '';
    description = '';
    thumbnailUrl = '';
}

export interface YoutubeShitshupPlaylists {
    pendingPlaylist: YoutubePlaylist;
    processedPlaylist: YoutubePlaylist;
    waitingPlaylist: YoutubePlaylist;
}

export class NullYoutubeShitshupPlaylists implements YoutubeShitshupPlaylists {
    pendingPlaylist = new NullYoutubePlaylist();
    processedPlaylist = new NullYoutubePlaylist();
    waitingPlaylist = new NullYoutubePlaylist();
}
