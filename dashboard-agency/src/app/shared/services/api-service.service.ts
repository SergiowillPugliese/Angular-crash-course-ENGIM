import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private readonly SLASH = "/";
  private readonly DEFALT_TIMEOUT: number = 60000;

  constructor(private http: HttpClient) { }

  protected getDefaultHeaders(): HttpHeaders {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json').set('Cache-Control', 'no-cache')
      .set('Pragma', 'no-cache')
      .set('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')
      .set('If-Modified-Since', '0')
    return headers;
  }

  protected getUploadMultipartHeaders(): HttpHeaders {
    let headers = new HttpHeaders()
      .set('Accept', '*/*').set('Content-Type', 'multipart/form-data')
    return headers;
  }

  protected getDownloadHeaders(): HttpHeaders {
    let headers = new HttpHeaders()
      .set('Accept', '*/*').set('Content-Type', 'application/json')
    return headers;
  }

  delete<T>(endpoint: string, id: number, time: number = this.DEFALT_TIMEOUT): Observable<T> {
    return this.http.delete<T>(`${environment.BASE_URL}${endpoint}${this.SLASH}${id}`).pipe(timeout(time));
  }

  get<T>(endpoint: string, time: number = this.DEFALT_TIMEOUT): Observable<T> {
    return this.http.get<T>(`${environment.BASE_URL}${endpoint}`).pipe(timeout(time));
  }

  post<T, V = T>(endpoint: string, element: T, time: number = this.DEFALT_TIMEOUT): Observable<V> {
    return this.http.post<V>(`${environment.BASE_URL}${endpoint}`, element).pipe(timeout(time));
  }

  put<T, V = T>(endpoint: string, element: T, time: number = this.DEFALT_TIMEOUT): Observable<V> {
    return this.http.put<V>(`${environment.BASE_URL}${endpoint}`, element).pipe(timeout(time));
  }

  /*   delete<T>(endpoint: string, id: number, time: number = this.DEFALT_TIMEOUT): Observable<T> {
      return this.http.delete<T>(`${environment.BASE_URL}${endpoint}${this.SLASH}${id}`, { headers: this.getDefaultHeaders() }).pipe(timeout(time));
    }
  
    get<T>(endpoint: string, time: number = this.DEFALT_TIMEOUT): Observable<T> {
      return this.http.get<T>(`${environment.BASE_URL}${endpoint}`, { headers: this.getDefaultHeaders() }).pipe(timeout(time));
    }
  
    post<T, V = T>(endpoint: string, element: T, time: number = this.DEFALT_TIMEOUT): Observable<V> {
      return this.http.post<V>(`${environment.BASE_URL}${endpoint}`, element, { headers: this.getDefaultHeaders() }).pipe(timeout(time));
    }
  
    put<T, V = T>(endpoint: string, element: T, time: number = this.DEFALT_TIMEOUT): Observable<V> {
      return this.http.put<V>(`${environment.BASE_URL}${endpoint}`, element, { headers: this.getDefaultHeaders() }).pipe(timeout(time));
    } */

}
