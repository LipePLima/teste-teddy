import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  private apiUrl = 'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners';

  constructor(private http: HttpClient) {}

  getPartners(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postPartners(newCompanie: {}): Observable<any> {
    return this.http.post(`${this.apiUrl}`, newCompanie)
  }
 
  putPartners(id: number, newCompanie: {}): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, newCompanie)
  }

  deletePartners(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
