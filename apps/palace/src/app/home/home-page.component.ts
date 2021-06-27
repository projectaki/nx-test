import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div class="home-page">
    <img
      class="home-logo"
      src="/assets/ferret_white_outline.png"
      alt="ferret"
    />
  </div>`,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
