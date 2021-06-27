import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `<mat-toolbar color="primary" class="navbar">
    <button
      *ngIf="true"
      (click)="toggleSideNav()"
      mat-icon-button
      class="example-icon"
      aria-label="Example icon-button with menu icon"
    >
      <mat-icon>menu</mat-icon>
    </button>
    <img routerLink="/home" class="logo" src="{{ logo }}" />
    <span>Wezl</span>
    <span class="example-spacer"></span>
    <span>About</span>
  </mat-toolbar> `,
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  logo = 'assets/ferret_small.ico';
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  toggleSideNav() {
    this.toggleSidenav.emit();
  }
}
