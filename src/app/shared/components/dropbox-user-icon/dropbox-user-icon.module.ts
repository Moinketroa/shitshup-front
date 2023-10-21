import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DropboxUserIconComponent } from './dropbox-user-icon.component';


@NgModule({
    declarations: [
        DropboxUserIconComponent,
    ],
    imports: [
        CommonModule,

        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        DropboxUserIconComponent,
    ]
})
export class DropboxUserIconModule {
}
