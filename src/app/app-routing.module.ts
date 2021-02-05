import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AustinHighInfoComponent } from './component/austin-high-info/austin-high-info.component';
import { BanfieldInfoComponent } from './component/banfield-info/banfield-info.component';
import { ClcInfoComponent } from './component/clc-info/clc-info.component';
import { EllisInfoComponent } from './component/ellis-info/ellis-info.component';
import { HomeComponent } from './component/home/home.component';
import { IjholtonInfoComponent } from './component/ijholton-info/ijholton-info.component';
import { NevelnInfoComponent } from './component/neveln-info/neveln-info.component';
import { SouthgateInfoComponent } from './component/southgate-info/southgate-info.component';
import { SumnerInfoComponent } from './component/sumner-info/sumner-info.component';
import { WoodsonInfoComponent } from './component/woodson-info/woodson-info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ahs', component: AustinHighInfoComponent },
  { path: 'ellis', component: EllisInfoComponent },
  { path: 'ijholton', component: IjholtonInfoComponent },
  { path: 'banfield', component: BanfieldInfoComponent },
  { path: 'neveln', component: NevelnInfoComponent },
  { path: 'southgate', component: SouthgateInfoComponent },
  { path: 'sumner', component: SumnerInfoComponent },
  { path: 'woodson', component: WoodsonInfoComponent },
  { path: 'clc', component: ClcInfoComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
