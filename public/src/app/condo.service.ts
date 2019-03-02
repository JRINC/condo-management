import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Condo } from './condo/condo';

@Injectable({
  providedIn: 'root'
})
export class CondoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private condosApiUrl = '/api/condominium';

  constructor(private http: Http) { }
    
  getCondos(): Observable<Condo[]> {
    return this.http
              .get(this.condosApiUrl)
              .pipe(map(response => {
                const condos = response.json();
                return condos.map((condo) => new Condo(condo));
              }));
  }
    
  getCondo(id: string): Observable<Condo> {
    return this.http
              .get(this.condosApiUrl + '/' + id)
              .pipe(map(response => {
                return new Condo(response.json());
              }));
  }
  
  private handleError (error: Response | any) {
    console.error('CondoService::handleError', error);
    return Observable.throw(error);
  }
  
}
