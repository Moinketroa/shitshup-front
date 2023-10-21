export interface DropboxUser {
    id?: string;
    accountId: string;
    displayName: string;
}

export class NullDropboxUser implements DropboxUser {
    accountId = '';
    displayName = '';
}
