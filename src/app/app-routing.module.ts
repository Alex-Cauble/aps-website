import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidsComponent } from './component/bids/bids.component';
import { ContactComponent } from './component/building-contact/building-contact.component';
import { CalendarsComponent } from './component/calendars/calendars.component';
import { HomeComponent } from './component/home/home.component';
import { SchoolBoardComponent } from './component/school-board/school-board.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'ahs',
    data: {
      buildingInfo: {
        title: 'Austin High School',
        principal: 'Andrea Malo',
        contacts: [
          { name: 'Phone', number: '(507)-460-1800' },
          { name: 'Fax', number: '(507)-355-2415' },
          { name: 'Activities', number: '(507)-460-1825' },
          { name: 'Attendance', number: '(507)-460-1806' },
          { name: 'Counseling', number: '(507)-460-1812' },
          { name: 'Food Service', number: '(507)-460-1821' },
          { name: 'Para Español', number: '(507)-460-1815' },
          { name: 'Enrollment', number: '(507)-460-1937' },
          { name: 'Cashier', number: '(507)-460-1822' },
        ],
      },
    },
    component: ContactComponent,
  },
  {
    path: 'banfield',
    data: {
      buildingInfo: {
        principal: 'Jeff Roland',
        title: 'Banfield Elementary School',
        contacts: [
          { name: 'Phone', number: '(507)-460-1200' },
          { name: 'Fax', number: '(507)-437-8662' },
          { name: 'Attendance', number: '(507)-460-1200' },
          { name: 'Nurse', number: '(507)-460-1202' },
          { name: 'Para Español', number: '(507)-460-1213' },
          { name: 'Enrollment', number: '(507)-460-1937' },
        ],
      },
    },
    component: ContactComponent,
  },
  { path: 'bids', component: BidsComponent },
  { path: 'board', component: SchoolBoardComponent },
  { path: 'calendars', component: CalendarsComponent },
  {
    path: 'clc',
    data: {
      buildingInfo: {
        title: 'Community Learning Center',
        contacts: [
          { name: 'Phone', number: '(507)-406-1700' },
          { name: 'Fax', number: '(507)-355-1215' },
          { name: 'Adult Learning', number: '(507)-460-1860' },
          { name: 'ECFE', number: '(507)-460-1707' },
          { name: 'ECSE', number: '(507)-460-1705' },
          { name: 'Kids Korner', number: '(507)-460-1704' },
          { name: 'Para Español', number: '(507)-460-1703' },
        ],
      },
    },
    component: ContactComponent,
  },
  {
    path: 'ellis',
    data: {
      buildingInfo: {
        principal: 'Jessica Cabeen',
        title: 'Ellis Middle School',
        contacts: [
          { name: 'Phone', number: '(507)-460-1500' },
          { name: 'Fax', number: '(507)-433-7330' },
          { name: 'Attendance', number: '(507)-460-1506' },
          { name: 'Athletics', number: '(507)-460-1508' },
          { name: 'Nurse', number: '(507)-460-1507' },
          { name: 'Para Español', number: '(507)-460-1515' },
          { name: 'Enrollment', number: '(507)-460-1937' },
        ],
      },
    },
    component: ContactComponent,
  },
  {
    path: 'ijholton',
    data: {
      buildingInfo: {
        principal: 'Dewey Schara',
        title: 'IJ Holton Intermediate School',
        contacts: [
          { name: 'Phone', number: '(507)-460-1525' },
          { name: 'Fax', number: '(507)-335-1608' },
          { name: 'Nurse', number: '(507)-460-1531' },
          { name: 'Para Español', number: '(507)-460-1529' },
          { name: 'Enrollment', number: '(507)-460-1937' },
        ],
      },
    },
    component: ContactComponent,
  },
  {
    path: 'neveln',
    data: {
      buildingInfo: {
        title: 'Neveln Elementary School',
        principal: 'David Wolff',
        contacts: [
          { name: 'Phone', number: '(507)-460-1600' },
          { name: 'Fax', number: '(507)-355-1722' },
          { name: 'Attendance', number: '(507)-460-1600' },
          { name: 'Para Español', number: '(507)-460-1605' },
          { name: 'Enrollment', number: '(507)-460-1937' },
        ],
      },
    },
    component: ContactComponent,
  },
  {
    path: 'southgate',
    data: {
      buildingInfo: {
        title: 'Southgate Elementary School',
        principal: 'Katie Baskin',
        contacts: [
          { name: 'Phone', number: '(507)-460-1300' },
          { name: 'Fax', number: '(507)-433-9651' },
          { name: 'Attendance', number: '(507)-460-1300' },
          { name: 'Nurse', number: '(507)-460-1305' },
          { name: 'Para Español', number: '(507)-460-1303' },
          { name: 'Enrollment', number: '(507)-460-1937' },
        ],
      },
    },
    component: ContactComponent,
  },
  {
    path: 'sumner',
    data: {
      buildingInfo: {
        principal: 'Sheila Berger',
        title: 'Sumner Elementary School',
        contacts: [
          { name: 'Phone', number: '(507)-460-1100' },
          { name: 'Fax', number: '(507)-434-4003' },
          { name: 'Attendance', number: '(507)-460-1100' },
          { name: 'Nurse', number: '(507)-460-1102' },
          { name: 'Para Español', number: '(507)-460-1103' },
          { name: 'Enrollment', number: '(507)-460-1937' },
        ],
      },
    },
    component: ContactComponent,
  },
  {
    path: 'woodson',
    data: {
      buildingInfo: {
        principal: 'Jill Rollie',
        title: 'Woodson Kindergarten Center',
        contacts: [
          { name: 'Phone', number: '(507)-460-1400' },
          { name: 'Fax', number: '(507)-437-2012' },
          { name: 'Nurse', number: '(507)-460-1402' },
          { name: 'Para Español', number: '(507)-460-1404' },
          { name: 'Kids Korner', number: '(507)-460-1405' },
          { name: 'Enrollment', number: '(507)-460-1937' },
        ],
      },
    },
    component: ContactComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
