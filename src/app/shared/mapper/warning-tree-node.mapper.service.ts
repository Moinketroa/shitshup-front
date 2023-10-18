import { Injectable } from '@angular/core';
import { WarningDto } from '../dtos/warning.dto';
import { TreeNode } from 'primeng/api';
import { DateTime } from 'luxon';

@Injectable({
    providedIn: 'root',
})
export class WarningTreeNodeMapperService {

    constructor() {
    }

    map(warning: WarningDto): TreeNode<WarningDto> {
        warning.createDate = DateTime.fromISO(warning.createDate).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);

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
