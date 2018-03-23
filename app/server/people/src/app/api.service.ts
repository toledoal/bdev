import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

const API_URL = 'http://localhost:8000'; // environment.apiURL;

@Injectable()
export class ApiService {

  constructor(private http: Http) {
   }

   public getPeople(): Observable<any> {
      return this.http.get(API_URL + '/api/read');
   }

   public createPerson(person: any) {
    this.http.post(API_URL + '/api/create', person);
 }

 public updatePerson(person: any) {
  this.http.put(API_URL + '/api/update', person);
}

public deletePerson(id: any) {
  this.http.delete(API_URL + '/api/delete', id);
}

}
