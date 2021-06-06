import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'akosdev-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  logo = 'assets/ferret.png';

  constructor() {}

  ngOnInit(): void {}
}
