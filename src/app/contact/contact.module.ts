import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        ContactComponent,
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        MatCardModule,
        MatButtonModule,
    ],
})
export class ContactModule {
}
