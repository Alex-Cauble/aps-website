import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, pluck, shareReplay, tap } from 'rxjs/operators';
import { Router, RouterOutlet } from '@angular/router';
import { slider } from './router-animations.animation';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [slider],
})
export class NavComponent {
  isHandset: any;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([
      Breakpoints.Handset,
      // Breakpoints.Tablet,
      // Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall,
    ])
    .pipe(
      pluck('matches'),
      tap((value) => (this.isHandset = value)),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData['page']
    );
  }

  navigate(route: string, drawer: MatSidenav): void {
    if (this.isHandset) {
      drawer.close();
    }
    this.router.navigateByUrl(route);
  }
}
