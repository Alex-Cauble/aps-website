import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // alertMessages = ['School is closed', 'Woodson Conferences Postponed'];
  alertMessages = [];

  constructor() {}
}
