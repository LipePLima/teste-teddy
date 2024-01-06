import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CompaniesService {
  private apiUrl = 'https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postCompanies(id: number, newCompanie: {}): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}`, newCompanie)
  }

  deleteCompanie(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
