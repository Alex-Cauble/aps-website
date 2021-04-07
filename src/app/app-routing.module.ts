import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidsComponent } from './component/bids/bids.component';
import { BuildingContactComponent } from './component/building-contact/building-contact.component';
import { CalendarsComponent } from './component/calendars/calendars.component';
import { HomeComponent } from './component/home/home.component';
import { SchoolBoardComponent } from './component/school-board/school-board.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'ahs',
    data: {
      page: 2,
      buildingInfo: {
        name: 'Austin High School',
        admin: {
          title: 'Principal',
          name: 'Andrea Malo',
        },
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
    component: BuildingContactComponent,
  },
  {
    path: 'banfield',
    data: {
      page: 3,
      buildingInfo: {
        admin: {
          title: 'Principal',
          name: 'Jeff Roland',
        },
        name: 'Banfield Elementary School',
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
    component: BuildingContactComponent,
  },
  { path: 'bids', component: BidsComponent, data: { page: 4 } },
  { path: 'board', component: SchoolBoardComponent, data: { page: 5 } },
  { path: 'calendars', component: CalendarsComponent, data: { page: 6 } },
  {
    path: 'clc',
    data: {
      page: 7,
      buildingInfo: {
        name: 'Community Learning Center',
        admin: {
          title: 'Administrator',
          name: 'Jennifer Lawhead',
        },
        contacts: [
          { name: 'Phone', number: '(507)-460-1700' },
          { name: 'Fax', number: '(507)-355-1215' },
          { name: 'Adult Learning', number: '(507)-460-1860' },
          { name: 'ECFE', number: '(507)-460-1707' },
          { name: 'ECSE', number: '(507)-460-1705' },
          { name: 'Kids Korner', number: '(507)-460-1704' },
          { name: 'Para Español', number: '(507)-460-1703' },
        ],
        detailContacts: [
          {
            name: 'Amy Goette',
            title: 'Early Childhood Screening',
            email: 'amy.goette@austin.k12.mn.us',
            phoneNumber: '(507)-460-3484',
          },
        ],
      },
    },
    component: BuildingContactComponent,
  },
  {
    path: 'district',
    data: {
      page: 16,
      buildingInfo: {
        name: 'District Departments',
        contacts: [
          { name: 'Superintendent', number: '(507)-460-1900' },
          { name: 'Activities', number: '(507)-355-1825' },
          { name: 'Educational Services', number: '(507)-460-1912' },
          { name: 'Enrollment Office', number: '(507)-460-1937' },
          { name: 'Facility Services', number: '(507)-460-1928' },
          { name: 'Dome Coordinator', number: '(507)-460-1927' },
          { name: 'Food & Nutrition', number: '(507)-460-1919' },
          { name: 'Human Resources', number: '(507)-460-1910' },
          { name: 'Technology Services', number: '(507)-460-1930' },
          { name: 'Special Services', number: '(507)-460-1916' },
          { name: 'Research & Assesment', number: '(507)-460-1933' },
        ],
      },
    },
    component: BuildingContactComponent,
  },
  {
    path: 'ellis',
    data: {
      page: 8,
      buildingInfo: {
        admin: {
          title: 'Principal',
          name: 'Jessica Cabeen',
        },
        name: 'Ellis Middle School',
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
    component: BuildingContactComponent,
  },
  {
    path: 'ijholton',
    data: {
      page: 9,
      buildingInfo: {
        admin: {
          title: 'Principal',
          name: 'Dewey Schara',
        },
        name: 'IJ Holton Intermediate School',
        contacts: [
          { name: 'Phone', number: '(507)-460-1525' },
          { name: 'Fax', number: '(507)-335-1608' },
          { name: 'Nurse', number: '(507)-460-1531' },
          { name: 'Para Español', number: '(507)-460-1529' },
          { name: 'Enrollment', number: '(507)-460-1937' },
        ],
      },
    },
    component: BuildingContactComponent,
  },
  {
    path: 'neveln',
    data: {
      page: 10,
      buildingInfo: {
        name: 'Neveln Elementary School',
        admin: {
          title: 'Principal',
          name: 'David Wolff',
        },
        contacts: [
          { name: 'Phone', number: '(507)-460-1600' },
          { name: 'Fax', number: '(507)-355-1722' },
          { name: 'Attendance', number: '(507)-460-1600' },
          { name: 'Para Español', number: '(507)-460-1605' },
          { name: 'Enrollment', number: '(507)-460-1937' },
        ],
      },
    },
    component: BuildingContactComponent,
  },
  {
    path: 'southgate',
    data: {
      page: 11,
      buildingInfo: {
        name: 'Southgate Elementary School',
        admin: {
          title: 'Principal',
          name: 'Katie Baskin',
        },
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
    component: BuildingContactComponent,
  },
  {
    path: 'sumner',
    data: {
      page: 12,
      buildingInfo: {
        admin: {
          title: 'Principal',
          name: 'Sheila Berger',
        },
        name: 'Sumner Elementary School',
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
    component: BuildingContactComponent,
  },
  {
    path: 'woodson',
    data: {
      page: 13,
      buildingInfo: {
        admin: {
          title: 'Principal',
          name: 'Jille Rollie',
        },
        name: 'Woodson Kindergarten Center',
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
    component: BuildingContactComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
