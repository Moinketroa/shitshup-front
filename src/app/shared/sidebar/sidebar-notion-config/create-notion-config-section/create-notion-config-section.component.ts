import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NotionConfig, NullNotionConfig } from '../../../models/notion-config.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateNotionConfigDTO } from '../../../dtos/create-notion-config.dto';

@Component({
  selector: 'shitshup-create-notion-config-section',
  templateUrl: './create-notion-config-section.component.html',
  styleUrls: ['./create-notion-config-section.component.scss']
})
export class CreateNotionConfigSectionComponent implements OnChanges {

    @Input()
    notionConfig: NotionConfig = new NullNotionConfig();

    @Output()
    onCreateNotionConfig: EventEmitter<CreateNotionConfigDTO> = new EventEmitter();

    createNotionConfigForm!: FormGroup;

    constructor(private readonly formBuilder: FormBuilder) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        // @ts-ignore
        if (changes.notionConfig) {
            this.createNotionConfigForm = this.formBuilder.group({
                internalIntegrationToken: ['', Validators.required],
                rootBlockId: [this.notionConfig.rootBlock, Validators.required],
            });
        }
    }

    createNotionConfig() {
        const newNotionConfig: CreateNotionConfigDTO = this.createNotionConfigForm.getRawValue();

        this.onCreateNotionConfig.emit(newNotionConfig);
    }

}
