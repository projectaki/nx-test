import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public isScreenSmall!: boolean;
  titles = ['RxJS', 'Testing'];
  heightOfNavbar = 60;

  constructor(private breakPoinbObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakPoinbObserver
      // .observe([Breakpoints.XSmall])
      .observe([` (max-width: ${720}px)`])
      .subscribe(
        (state: BreakpointState) => (this.isScreenSmall = state.matches)
      );
  }
}
