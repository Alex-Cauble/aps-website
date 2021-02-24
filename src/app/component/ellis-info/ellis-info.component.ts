import { Component, OnInit } from '@angular/core';
import { ContactNumber } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-ellis-info',
  templateUrl: './ellis-info.component.html',
  styleUrls: ['./ellis-info.component.scss'],
})
export class EllisInfoComponent implements OnInit {
  principal = 'Jessica Cabeen';
  title = 'Ellis Middle School';
  contacts: ContactNumber[] = [
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
