import { Component, Inject, OnInit } from '@angular/core';
import { RxjsStateService } from '../state/rxjs-state.service';
import { mock } from '../state/rxjs-state.service';

@Component({
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.scss'],
})
export class RxjsPageComponent implements OnInit {
  code = `const x = 5;
          for (let i = 0; i < 5; i++) {
            console.log("gotcha")
          }`;

  idGenerator = 1;
  constructor(public stateService: RxjsStateService) {}

  ngOnInit(): void {}

  addEntity() {
    const id = this.idGenerator++;
    const toAdd: mock = {
      id,
      name: `name${id}`,
    };
    this.stateService.addEntity(toAdd);
  }

  editEntity() {
    const updated: mock = {
      id: 3,
      name: `UPDATED`,
    };
    this.stateService.editEntity(updated);
  }

  removeEntity() {
    this.stateService.deleteEntity(3);
  }
}
