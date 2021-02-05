import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-southgate-info',
  templateUrl: './southgate-info.component.html',
  styleUrls: ['./southgate-info.component.scss'],
})
export class SouthgateInfoComponent {
  title = 'Southgate Elementary School';
  contacts: Contact[] = [
    { name: 'Phone', number: '(507)-460-1300' },
    { name: 'Fax', number: '(507)-433-9651' },
    { name: 'Attendance', number: '(507)-460-1300' },
    { name: 'Nurse', number: '(507)-460-1305' },
    { name: 'Para Español', number: '(507)-460-1303' },
    { name: 'Enrollment', number: '(507)-460-1937' },
  ];

  constructor() {}
}
