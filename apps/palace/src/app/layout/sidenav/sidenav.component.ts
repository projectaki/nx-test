import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;

  titles = ['RxJS', 'Testing'];
  public isScreenSmall!: boolean;

  constructor(
    private sidenavService: SidenavService,
    private breakPoinbObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakPoinbObserver
      // .observe([Breakpoints.XSmall])
      .observe([` (max-width: ${720}px)`])
      .subscribe(
        (state: BreakpointState) => (this.isScreenSmall = state.matches)
      );
  }

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
