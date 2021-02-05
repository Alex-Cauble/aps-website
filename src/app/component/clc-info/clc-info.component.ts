import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/types/Contact.type';

@Component({
  selector: 'app-clc-info',
  templateUrl: './clc-info.component.html',
  styleUrls: ['./clc-info.component.scss'],
})
export class ClcInfoComponent {
  title = 'Community Learning Center';
  contacts: Contact[] = [
    { name: 'phone', number: '(507)-406-1700' },
    { name: 'Fax', number: '(507)-355-1215' },
    { name: 'Adult Learning', number: '(507)-460-1860' },
    { name: 'ECFE', number: '(507)-460-1707' },
    { name: 'ECSE', number: '(507)-460-1705' },
    { name: 'Kids Korner', number: '(507)-460-1704' },
    { name: 'Para Español', number: '(507)-460-1703' },
  ];

  constructor() {}
}
