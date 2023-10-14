import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private readonly authService: AuthService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.getToken();

        // Clone the request and add the token to the headers
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token,
                }
            });
        }

        // Pass the request on to the next handler in the chain
        return next.handle(request);
    }
}
