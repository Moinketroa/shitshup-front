import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { SocketIoModule } from 'ngx-socket-io';
import { environment } from '../environment/environment';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotionConfigIconModule } from './shared/components/notion-config-icon/notion-config-icon.module';
import { YoutubeUserIconModule } from './shared/components/youtube-user-icon/youtube-user-icon.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        MatToolbarModule,

        NotionConfigIconModule,
        YoutubeUserIconModule,

        AppRoutingModule,
        HttpClientModule,
        SidebarModule,

        SocketIoModule.forRoot({
            url: environment.socketUrl,
        }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
