import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback.component';
import { DropboxAuthCallbackComponent } from './dropbox-auth-callback/dropbox-auth-callback.component';

const routes: Routes = [
    {
        path: '',
        component: AuthCallbackComponent,
    },
    {
        path: 'dropbox',
        component: DropboxAuthCallbackComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthCallbackRoutingModule { }
