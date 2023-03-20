import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: 'welcome',
        component: AppComponent,
    },
    {
        path: 'youtube',
        loadChildren: () => import('./youtube-client/youtube-client.module').then(m => m.YoutubeClientModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'welcome',
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
