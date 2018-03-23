import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {

  public people$: Person[];
  public person$: Person;
  public name$: string;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.apiService.getPeople().subscribe((people) => {
      this.people$ = people;
    } );
  }

  updatePerson(e, person: Person) {
    this.apiService.updatePerson(person);
    this.refresh();
  }

  deletePerson(e, id: string) {
    this.apiService.deletePerson(id);
    this.refresh();
  }

  addPerson() {
    this.apiService.createPerson(this.name$);
    this.name$ = '';
    this.refresh();
  }

}
