import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'shitshup-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

    constructor(private readonly activatedRoute: ActivatedRoute,
                private readonly authService: AuthService) {

    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(queryParams => {
            const token = queryParams['token'];
            this.authService.login(token);

            window.close();
        });
    }
}
