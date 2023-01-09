import { Component } from '@angular/core';
import { APIS } from '../../../../mock/mock-application';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  applications: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getApps();
  }

  getApps(): void {
    this.applications = APIS['/api/v1/activities'];
  }
}
