export interface NotionDatabase {
    id?: string;
    title: string;
    description?: string;
}

export class NullNotionDatabase implements NotionDatabase {
    title = '';
}
