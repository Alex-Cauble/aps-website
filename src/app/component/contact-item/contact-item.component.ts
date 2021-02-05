import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent {
  @Input() name: string = '';
  @Input() number: string = '';
  @Input() coordinator: string = '';

  constructor() {}

  formatAsTelephone(tel: string): string {
    return `tel:${tel.replace(/\D/g, '')}`;
  }
}
