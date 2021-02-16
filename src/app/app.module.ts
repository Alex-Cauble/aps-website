import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AlertComponent } from './component/alert/alert.component';
import { AustinHighInfoComponent } from './component/austin-high-info/austin-high-info.component';
import { EllisInfoComponent } from './component/ellis-info/ellis-info.component';
import { IjholtonInfoComponent } from './component/ijholton-info/ijholton-info.component';
import { BanfieldInfoComponent } from './component/banfield-info/banfield-info.component';
import { NevelnInfoComponent } from './component/neveln-info/neveln-info.component';
import { SouthgateInfoComponent } from './component/southgate-info/southgate-info.component';
import { WoodsonInfoComponent } from './component/woodson-info/woodson-info.component';
import { ClcInfoComponent } from './component/clc-info/clc-info.component';
import { SumnerInfoComponent } from './component/sumner-info/sumner-info.component';
import { ContactItemComponent } from './component/contact-item/contact-item.component';
import { SchoolBoardComponent } from './component/school-board/school-board.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarsComponent } from './component/calendars/calendars.component';
import { BidsComponent } from './component/bids/bids.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    AlertComponent,
    AustinHighInfoComponent,
    EllisInfoComponent,
    IjholtonInfoComponent,
    BanfieldInfoComponent,
    NevelnInfoComponent,
    SouthgateInfoComponent,
    WoodsonInfoComponent,
    ClcInfoComponent,
    SumnerInfoComponent,
    ContactItemComponent,
    SchoolBoardComponent,
    CalendarsComponent,
    BidsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
