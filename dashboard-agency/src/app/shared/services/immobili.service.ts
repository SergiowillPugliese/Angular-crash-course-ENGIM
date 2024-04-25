import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';

@Injectable({
  providedIn: 'root',
})
export class ImmobiliService {

  endpoint = '/immobili';

  constructor(private apiService: ApiService) { }

  getImmobili() {

  }

  getImmobile(id: number) {

  }

  addImmobile(element: any) {

  }

  updateImmobile(element: any) {

  }

  deleteImmobile(id: number) {

  }


}
