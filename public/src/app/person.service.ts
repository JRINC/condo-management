import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Person } from './person/person'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private todosApiUrl = '/api/people';

  constructor(private http: Http) { }
  
  
}
