import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private authService: AuthService
  ) { }

  login(username: string, password: string) {
    return this.authService.authUser(username, password);
  }

}
