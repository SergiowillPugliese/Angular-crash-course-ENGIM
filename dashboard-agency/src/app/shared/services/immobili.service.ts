import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { ImmobiliDTO } from '../model/immobili.model';

@Injectable({
  providedIn: 'root',
})
export class ImmobiliService {

  endpoint = '/immobili';

  constructor(private apiService: ApiService) { }

  getImmobili() {
    return this.apiService.get<ImmobiliDTO[]>(this.endpoint);
  }

  getImmobile(id: number) {
    return this.apiService.get<ImmobiliDTO>(`${this.endpoint}/${id}`);
  }

  addImmobile(element: any) {
    return this.apiService.post(this.endpoint, element);
  }

  updateImmobile(element: any) {
    return this.apiService.put(this.endpoint, element);
  }

  deleteImmobile(id: number) {
    return this.apiService.delete(this.endpoint, id);
  }


}
