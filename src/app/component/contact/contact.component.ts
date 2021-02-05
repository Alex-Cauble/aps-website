import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() title: string = 'Austin High School';
  @Input() contacts: Contact[] = [
    { name: 'Phone', number: '(000)-000-0000' },
    { name: 'Phone', number: '(000)-000-0000' },
    { name: 'Phone', number: '(000)-000-0000' },
    { name: 'Phone', number: '(000)-000-0000' },
    { name: 'Phone', number: '(000)-000-0000' },
    { name: 'Phone', number: '(000)-000-0000' },
    { name: 'Phone', number: '(000)-000-0000' },
  ];
  constructor() {}
}
