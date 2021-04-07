import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-contact-item',
  templateUrl: './detail-contact-item.component.html',
  styleUrls: ['./detail-contact-item.component.scss'],
})
export class DetailContactItemComponent {
  @Input() name: string = '';
  @Input() phoneNumber: string = '';
  @Input() email: string = '';
  @Input() title: string = '';

  constructor() {}

  formatAsTelephone(tel: string): string {
    return `tel:${tel.replace(/\D/g, '')}`;
  }

  formatAsEmail(email: string): string {
    return `tel:${email}`;
  }
}
