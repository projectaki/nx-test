import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'xxx/:id', component: AppComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
