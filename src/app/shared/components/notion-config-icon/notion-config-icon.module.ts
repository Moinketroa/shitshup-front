import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotionConfigIconComponent } from './notion-config-icon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        NotionConfigIconComponent,
    ],
    imports: [
        CommonModule,

        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        NotionConfigIconComponent,
    ],
})
export class NotionConfigIconModule {
}
