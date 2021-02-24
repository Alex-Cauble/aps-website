import { Component, OnInit } from '@angular/core';
import { ContactNumber } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-neveln-info',
  templateUrl: './neveln-info.component.html',
  styleUrls: ['./neveln-info.component.scss'],
})
export class NevelnInfoComponent {
  title = 'Neveln Elementary School';
  principal = 'David Wolff';

  contacts: ContactNumber[] = [
    { name: 'Phone', number: '(507)-460-1600' },
    { name: 'Fax', number: '(507)-355-1722' },
    { name: 'Attendance', number: '(507)-460-1600' },
    { name: 'Para Español', number: '(507)-460-1605' },
    { name: 'Enrollment', number: '(507)-460-1937' },
  ];

  constructor() {}
}
