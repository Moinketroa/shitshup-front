import { Injectable } from '@angular/core';
import { WarningDto } from '../dtos/warning.dto';
import { TreeNode } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class WarningTreeNodeMapperService {

    constructor() {
    }

    map(warning: WarningDto): TreeNode<WarningDto> {
        return <TreeNode>{
            label: warning.warningType,
            data: warning,
            expanded: false,
            draggable: false,
            droppable: false,
            selectable: false,
        };
    }
}
