import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { StorageService } from './storage.service';
import { UserResponse } from '../interface/user.interface';
import { ApiService } from './api-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private apiService: ApiService, private storage: StorageService) { }

  authUser(endpoint: string) {
    return this.apiService.get<UserResponse[]>(endpoint);
  }


  logout() {
    return this.storage.removeItem('currentUser');
  }

  isLoggedIn() {
    return this.storage.getItem('currentUser') != null;
  }

}
