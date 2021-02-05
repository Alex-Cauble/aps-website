import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-banfield-info',
  templateUrl: './banfield-info.component.html',
  styleUrls: ['./banfield-info.component.scss'],
})
export class BanfieldInfoComponent {
  principal = 'Jeff Roland';
  title = 'Banfield Elementeary School';
  contacts: Contact[] = [
    { name: 'Phone', number: '(507)-460-1200' },
    { name: 'Fax', number: '(507)-437-8662' },
    { name: 'Attendance', number: '(507)-460-1200' },
    { name: 'Nurse', number: '(507)-460-1202' },
    { name: 'Para Español', number: '(507)-460-1213' },
    { name: 'Enrollment', number: '(507)-460-1937' },
  ];

  constructor() {}
}
