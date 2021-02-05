import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-sumner-info',
  templateUrl: './sumner-info.component.html',
  styleUrls: ['./sumner-info.component.scss'],
})
export class SumnerInfoComponent {
  title = 'Sumner Elementary School';
  contacts: Contact[] = [
    { name: 'Phone', number: '(507)-460-1100' },
    { name: 'Fax', number: '(507)-434-4003' },
    { name: 'Attendance', number: '(507)-460-1100' },
    { name: 'Nurse', number: '(507)-460-1102' },
    { name: 'Para Español', number: '(507)-460-1103' },
    { name: 'Enrollment', number: '(507)-460-1937' },
  ];

  constructor() {}
}
