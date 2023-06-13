import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'shitshup-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    constructor(private readonly sidebarService: SidebarService) {
    }

    closeSidebar(): void {
        this.sidebarService.closeSidebar();
    }
}
