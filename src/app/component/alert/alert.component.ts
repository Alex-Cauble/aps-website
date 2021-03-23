import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements AfterViewInit {
  alertMessages: string[] = [];

  constructor() {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
