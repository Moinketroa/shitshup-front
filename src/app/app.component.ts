import { Component } from '@angular/core';
import { RoutingOutlet } from './app-routing.module';
import { SidebarService } from './shared/sidebar/sidebar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    isSidebarOpen$ = this.sidebarService.isSidebarOpen$;

    RoutingOutlet = RoutingOutlet;

    constructor(private readonly sidebarService: SidebarService) {
    }
}
