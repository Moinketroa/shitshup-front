import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotionConfig, NullNotionConfig } from '../../models/notion-config.model';

@Component({
  selector: 'shitshup-notion-config-icon',
  templateUrl: './notion-config-icon.component.html',
  styleUrls: ['./notion-config-icon.component.scss']
})
export class NotionConfigIconComponent {

    @Input()
    notionConfig: NotionConfig = new NullNotionConfig();

    @Output()
    click: EventEmitter<void> = new EventEmitter();

}
