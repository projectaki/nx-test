import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../sidenav/sidenav.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  logo = 'assets/ferret.png';

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {}

  toggleSideNav() {
    this.sidenavService.toggle();
  }
}
