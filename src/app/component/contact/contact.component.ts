import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() title: string = '';
  @Input() principal: string | undefined;
  @Input() contacts: Contact[] = [];
  constructor() {}
}
