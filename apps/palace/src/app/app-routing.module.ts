import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { RxjsPageComponent } from './rxjs/rxjs-page/rxjs-page.component';
import { RxjsModule } from './rxjs/rxjs.module';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'rxjs', component: RxjsPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

  // { path: 'xxx/:id', component: AppComponent },
];

@NgModule({
  declarations: [],
  imports: [RxjsModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
