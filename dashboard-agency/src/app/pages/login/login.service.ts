import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { map, catchError, of } from 'rxjs';
import { UserResponse } from 'src/app/shared/interface/user.interface';
import { User } from 'src/app/shared/model/User.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  loginEndpoint = '/users';

  constructor(
    private authService: AuthService,
    private storage: StorageService
  ) { }

  login(username: string, password: string) {
    return this.authService.authUser(this.loginEndpoint)
      .pipe(
        map((users: UserResponse[]) => {
          const user = users.find(u => u.username === username && u.password === password);
          if (user) {
            this.storage.setItem('currentUser', new User(user));
            return user;
          }
          return null;
        }),
        catchError(error => {
          console.error('Authentication error:', error);
          return of(null);
        })
      );
  }

}
