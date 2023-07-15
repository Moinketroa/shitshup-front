export interface YoutubePlaylistItem {
    id?: string;
    videoId: string;
    title: string;
    thumbnailUrl: string;
}

export class NullYoutubePlaylistItem implements YoutubePlaylistItem {
    videoId = '';
    title = '';
    thumbnailUrl = '';
}

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

export interface YoutubePlaylistPreview {
    id?: string;
    numberOfItems: number;
    items: YoutubePlaylistItem[];
}

export class NullYoutubePlaylistPreview implements YoutubePlaylistPreview {
    numberOfItems = 0;
    items = [];
}
