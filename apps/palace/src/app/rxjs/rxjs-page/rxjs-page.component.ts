import { Component, OnInit } from '@angular/core';

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
