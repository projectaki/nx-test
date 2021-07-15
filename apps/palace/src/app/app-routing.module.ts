import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsModule } from './rxjs/rxjs.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then((m) => m.RxjsModule),
  },
  {
    path: 'testing',
    loadChildren: () =>
      import('./testing/testing.module').then((m) => m.TestingModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RxjsModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
