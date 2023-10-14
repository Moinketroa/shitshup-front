import { Injectable } from '@angular/core';
import { isDefined } from '../util/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    login(token: string): void {
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        const token = localStorage.getItem('token');

        return isDefined(token)
            ? `Bearer ${token}`
            : null;
    }

    logout(): void {
        localStorage.removeItem('token');
    }
}
