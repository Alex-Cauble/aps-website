import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-woodson-info',
  templateUrl: './woodson-info.component.html',
  styleUrls: ['./woodson-info.component.scss'],
})
export class WoodsonInfoComponent {
  title = 'Woodson Kindergarten Center';
  contacts: Contact[] = [
    { name: 'Phone', number: '(507)-460-1400' },
    { name: 'Fax', number: '(507)-437-2012' },
    { name: 'Nurse', number: '(507)-460-1402' },
    { name: 'Para Español', number: '(507)-460-1404' },
    { name: 'Kids Korner', number: '(507)-460-1405' },
    { name: 'Enrollment', number: '(507)-460-1937' },
  ];
  constructor() {}
}
