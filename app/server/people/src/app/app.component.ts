import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {

  public people$;
  public person$;
  constructor(private apiService: ApiService) {
  }

  ngInit() {
    this.people$ = this.apiService.getPeople();
  }

  updatePerson() {
    this.apiService.updatePerson(this.person$);
  }

  deletePerson() {
    this.apiService.deletePerson(this.person$);
  }

  addPerson() {
    this.apiService.createPerson(this.person$);
  }

}
