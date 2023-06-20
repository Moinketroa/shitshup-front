import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NotionConfig, NullNotionConfig } from '../../../models/notion-config.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { UpdateNotionConfigDTO } from '../../../dtos/update-notion-config.dto';

@Component({
  selector: 'shitshup-update-notion-config-section',
  templateUrl: './update-notion-config-section.component.html',
  styleUrls: ['./update-notion-config-section.component.scss']
})
export class UpdateNotionConfigSectionComponent implements OnChanges {

    @Input()
    notionConfig: NotionConfig = new NullNotionConfig();

    @Output()
    onUpdateNotionConfig: EventEmitter<UpdateNotionConfigDTO> = new EventEmitter();

    updateNotionConfigForm!: FormGroup;

    constructor(private readonly formBuilder: FormBuilder) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        // @ts-ignore
        if (changes.notionConfig) {
            this.updateNotionConfigForm = this.formBuilder.group({
                updateToken: [false],
                internalIntegrationToken: [this.notionConfig.tokenHint, Validators.required],
                rootBlockId: [this.notionConfig.rootBlock, Validators.required],
            });

            this.updateNotionConfigForm.get('internalIntegrationToken')?.disable();
        }
    }

    get tokenControl(): FormControl {
        return <FormControl> this.updateNotionConfigForm.get('internalIntegrationToken');
    }

    toggleToken(change: MatCheckboxChange) {
        if (change.checked) {

            this.tokenControl.setValue('');
            this.tokenControl.enable();
        } else {
            this.tokenControl.setValue(this.notionConfig.tokenHint);
            this.tokenControl.disable();
        }
    }

    updateNotionConfig(): void {
        const rawNotionConfig = this.updateNotionConfigForm.getRawValue();

        const updateNotionConfig: UpdateNotionConfigDTO = <UpdateNotionConfigDTO> {
            internalIntegrationToken: rawNotionConfig.updateToken
                ? rawNotionConfig.internalIntegrationToken
                : undefined,
            rootBlockId: rawNotionConfig.rootBlockId,
        };

        this.onUpdateNotionConfig.emit(updateNotionConfig);
    }

}
