import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <navbar></navbar>
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
