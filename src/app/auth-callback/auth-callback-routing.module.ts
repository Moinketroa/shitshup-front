import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback.component';

const routes: Routes = [
    {
        path: '',
        component: AuthCallbackComponent,
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
