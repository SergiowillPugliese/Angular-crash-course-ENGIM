import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { UserResponse } from '../interface/user.interface';
import { ApiService } from './api-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private apiService: ApiService, private storage: StorageService) { }

  //in realtà dovrebbe essere una post. Fatto così per comodità e perché json server non gestisce auth
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
