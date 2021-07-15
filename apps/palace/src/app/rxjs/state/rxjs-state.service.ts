import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StateService } from '../../state/state-service';

export interface mock {
  id: number;
  name: string;
}

interface RxjsState {
  entities: mock[];
  number: number;
}

const initialState: RxjsState = {
  entities: [],
  number: 0,
};

@Injectable({
  providedIn: 'root',
})
export class RxjsStateService extends StateService<RxjsState> {
  numbers$: Observable<mock[]> = this.select((state) => state.entities)
    .pipe
    // tap((x) => console.log(x))
    ();

  constructor() {
    super(initialState);
  }

  addEntity(entity: mock) {
    this.setState({ entities: [...this.state.entities, entity] });
  }

  deleteEntity(id: number) {
    const filtered = this.state.entities.filter((x) => x.id !== id);
    this.setState({ entities: filtered });
  }

  editEntity(entity: mock) {
    const index = this.state.entities.findIndex((x) => x.id === entity.id);
    if (index > 0) {
      const copy = [
        ...this.state.entities.slice(0, index),
        entity,
        ...this.state.entities.slice(index + 1),
      ];
      this.setState({ entities: copy });
    }
  }
}
