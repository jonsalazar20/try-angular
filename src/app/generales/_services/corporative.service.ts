import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorporativeService {

  url = environment.apiURL
  auth_token = 'Bearer ' + localStorage.getItem('tokenscloud');

   

  constructor(private httpClient: HttpClient) { }

  getAllCorporatives(): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth_token
    });
   return  this.httpClient.get(this.url + '/corporativos', { headers:httpHeaders })
  }

  // getCorporatives(id: string):Observable<any>{
  //   const httpHeaders: HttpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: this.auth_token
  //   });
  //   return this.httpClient.get(`${this.url}${id}`,{ headers: httpHeaders})
  // }
}
