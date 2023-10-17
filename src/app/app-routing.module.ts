import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum RoutingOutlet {
    SIDEBAR = 'sidebar'
}

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'camelot-wheel',
        loadChildren: () => import('./camelot-wheel/camelot-wheel.module').then(m => m.CamelotWheelModule),
    },
    {
        path: 'callback',
        loadChildren: () => import('./auth-callback/auth-callback.module').then(m => m.AuthCallbackModule),
    },
    {
        path: '',
        outlet: RoutingOutlet.SIDEBAR,
        loadChildren: () => import('./shared/sidebar/sidebar.module').then(m => m.SidebarModule),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {
}
