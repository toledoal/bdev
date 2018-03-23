import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Http, Response} from '@angular/http';
import { HttpModule, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Person } from './interfaces/person';

const API_URL = environment.apiURL;

@Injectable()
export class ApiService {

  constructor(private http: Http) {
   }

   public getPeople(): Observable<Person[]> {
      return this.http.get(API_URL + '/api/read').map( r => {
        const people = r.json();
        return people.data;
      });
   }

   public createPerson(person: string) {
    return this.http.post(API_URL + '/api/create', {name: person},
    { headers: new Headers({ 'Content-Type': 'application/json'}) }).map(r => {
      return r.json();
    }).subscribe();
  }

    public updatePerson(person: Person) {
      return this.http.put(API_URL + '/api/update/' + person.id, person,
      { headers: new Headers({ 'Content-Type': 'application/json'}) } ).map(r => {
        return r.json();
      }).subscribe();
  }

  public deletePerson(personId: string) {
  this.http.delete(API_URL + '/api/delete/' + personId).map( r => null).subscribe();
  }

}
