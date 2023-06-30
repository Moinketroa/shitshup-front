import { Component, OnInit } from '@angular/core';
import { NotionService } from '../shared/services/notion.service';

@Component({
  selector: 'shitshup-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    showPrerequisites: boolean = false;
    showNotionPrerequisite: boolean = false;

    constructor(private readonly notionService: NotionService) {
    }

    ngOnInit() {
        this.notionService.fetchMediaLibrary()
            .subscribe((mediaLibrary) => {
                this.showNotionPrerequisite = !mediaLibrary.id;

                this.showPrerequisites = this.showNotionPrerequisite;
            });
    }

}
