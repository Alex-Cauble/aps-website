import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-ellis-info',
  templateUrl: './ellis-info.component.html',
  styleUrls: ['./ellis-info.component.scss'],
})
export class EllisInfoComponent implements OnInit {
  title = 'Ellis Middle School';
  contacts: Contact[] = [
    { name: 'Phone', number: '(507)-460-1500' },
    { name: 'Fax', number: '(507)-433-7330' },
    { name: 'Attendance', number: '(507)-460-1506' },
    { name: 'Athletics', number: '(507)-460-1508' },
    { name: 'Nurse', number: '(507)-460-1507' },
    { name: 'Para Español', number: '(507)-460-1515' },
    { name: 'Enrollment', number: '(507)-460-1937' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
