import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-ijholton-info',
  templateUrl: './ijholton-info.component.html',
  styleUrls: ['./ijholton-info.component.scss'],
})
export class IjholtonInfoComponent {
  principal = 'Dewey Schara';
  title = 'IJ Holton Intermediate School';
  contacts: Contact[] = [
    { name: 'Phone', number: '(507)-460-1525' },
    { name: 'Fax', number: '(507)-335-1608' },
    { name: 'Nurse', number: '(507)-460-1531' },
    { name: 'Para Español', number: '(507)-460-1529' },
    { name: 'Enrollment', number: '(507)-460-1937' },
  ];

  constructor() {}
}
