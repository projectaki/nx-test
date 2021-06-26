import { Component, Inject, OnInit } from '@angular/core';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@Component({
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.scss'],
})
export class RxjsPageComponent implements OnInit {
  code = `const x = 5;
          for (let i = 0; i < 5; i++) {
            console.log("gotcha")
          }`;
  constructor() {}

  ngOnInit(): void {}
}
