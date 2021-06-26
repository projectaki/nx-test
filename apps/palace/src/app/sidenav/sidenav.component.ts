import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;

  titles = ['RxJS', 'Testing'];

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
