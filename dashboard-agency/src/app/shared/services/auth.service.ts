import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, catchError, map, of, tap, } from 'rxjs';
import { StorageService } from './storage.service';
import { UserResponse } from '../interface/user.interface';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private authUrl = '/users'

  constructor(private http: HttpClient, private storage: StorageService) { }

  authUser(username: string, password: string): Observable<UserResponse | null> {
    return this.http.get<UserResponse[]>(`${environment.BASE_URL}${this.authUrl}`)
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


  logout() {
    return this.storage.removeItem('currentUser');
  }

  isLoggedIn() {
    return this.storage.getItem('currentUser') != null;
  }

}
