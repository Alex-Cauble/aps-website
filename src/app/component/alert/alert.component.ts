import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alertMessages: string[] = [];

  constructor(private alertService: AlertService) {}

  async ngOnInit(): Promise<void> {
    this.alertMessages = await this.alertService.getAlerts().toPromise();
  }
}
