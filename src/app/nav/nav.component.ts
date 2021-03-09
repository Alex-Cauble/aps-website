import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { slider } from './router-animations.animation';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [slider],
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([
      Breakpoints.Handset,
      // Breakpoints.Tablet,
      // Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall,
    ])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData['page']
    );
  }
}
