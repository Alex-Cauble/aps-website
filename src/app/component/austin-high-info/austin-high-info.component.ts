import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-austin-high-info',
  templateUrl: './austin-high-info.component.html',
  styleUrls: ['./austin-high-info.component.scss'],
})
export class AustinHighInfoComponent {
  title = 'Austin High School';
  contacts: Contact[] = [
    { name: 'Phone', number: '(507)-460-1800' },
    { name: 'Fax', number: '(507)-355-2415' },
    { name: 'Attendance', number: '(507)-460-1806' },
    { name: 'Counseling', number: '(507)-460-1812' },
    { name: 'Food Service', number: '(507)-460-1821' },
    { name: 'Para Español', number: '(507)-460-1815' },
    { name: 'Enrollment', number: '(507)-460-1937' },
    { name: 'Cashier', number: '(507)-460-1822' },
  ];
  constructor() {}
}
