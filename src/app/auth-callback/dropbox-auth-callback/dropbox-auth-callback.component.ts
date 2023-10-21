import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DropboxAuthService } from '../../shared/services/dropbox-auth.service';

@Component({
  selector: 'shitshup-dropbox-auth-callback',
  templateUrl: './dropbox-auth-callback.component.html',
  styleUrls: ['./dropbox-auth-callback.component.scss']
})
export class DropboxAuthCallbackComponent implements OnInit {

    constructor(private readonly activatedRoute: ActivatedRoute,
                private readonly dropboxAuthService: DropboxAuthService) {

    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(queryParams => {
            const code = queryParams['code'];
            this.dropboxAuthService.callback(code)
                .subscribe(() => {
                    window.close();
                });
        });
    }

}
