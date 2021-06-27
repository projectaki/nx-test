import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <sidenav>
      <router-outlet></router-outlet>
      <footer></footer>
    </sidenav>
  `,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
