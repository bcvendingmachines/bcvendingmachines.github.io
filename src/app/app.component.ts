import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  mobile: boolean;

  constructor(private breakpointObserver: BreakpointObserver){
    this.mobile = false;
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      if (result.matches) {
        this.mobile = true;
      };
    });
  };
}
