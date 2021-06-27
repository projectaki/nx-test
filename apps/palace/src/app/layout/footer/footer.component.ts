import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  template: `<div class="footer">
    <div class="footer-content">
      {{ version }}
    </div>
  </div> `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  version = 'v.1.0.0';
  constructor() {}

  ngOnInit(): void {}
}
