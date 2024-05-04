import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export interface Responce {
  clienti: any,
  immobili: any,
  users: any
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = environment.JSON_PATH;

  constructor(private http: HttpClient) { }

  getElements() {
    return this.http.get<Responce>(this.url);
    /* const get = fetch(this.url).then((data) => data);
    return of(get); */
  }

}
