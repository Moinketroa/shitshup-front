export interface NotionConfig {
    id?: string;
    tokenHint: string;
    rootBlock: string;
}

export class NullNotionConfig implements NotionConfig {
    tokenHint = '';
    rootBlock = '';
}
