import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent implements OnInit {
  @Input() name: string = '';
  @Input() number: string = '';

  constructor() {}

  formatAsTelephone(tel: string): string {
    return tel.replace(/\D/g, '');
  }
}
