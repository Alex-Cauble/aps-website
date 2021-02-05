import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AustinHighInfoComponent } from './component/austin-high-info/austin-high-info.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ahs', component: AustinHighInfoComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
