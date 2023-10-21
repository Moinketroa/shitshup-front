import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthCallbackRoutingModule } from './auth-callback-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthCallbackComponent } from './auth-callback.component';
import { DropboxAuthCallbackComponent } from './dropbox-auth-callback/dropbox-auth-callback.component';


@NgModule({
    declarations: [
        AuthCallbackComponent,
        DropboxAuthCallbackComponent,
    ],
    imports: [
        CommonModule,
        AuthCallbackRoutingModule,
        MatProgressSpinnerModule,
    ],
})
export class AuthCallbackModule {
}
