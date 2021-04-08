import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './component/home/home.component';
import { BuildingContactComponent } from './component/building-contact/building-contact.component';
import { AlertComponent } from './component/alert/alert.component';
import { ContactItemComponent } from './component/contact-item/contact-item.component';
import { SchoolBoardComponent } from './component/school-board/school-board.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarsComponent } from './component/calendars/calendars.component';
import { BidsComponent } from './component/bids/bids.component';
import { DetailContactItemComponent } from './component/detail-contact-item/detail-contact-item.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BuildingContactComponent,
    AlertComponent,
    ContactItemComponent,
    SchoolBoardComponent,
    CalendarsComponent,
    BidsComponent,
    DetailContactItemComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
