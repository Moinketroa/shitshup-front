import { TreeNode } from 'primeng/api';

export interface TaskTreeNode extends TreeNode {
    id: string;
    progress: number;
    hasFailed: boolean;
    parentId: string;
}
