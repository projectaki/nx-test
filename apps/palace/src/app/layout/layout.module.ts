import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home/home-page.component';
import { RxjsPageComponent } from '../rxjs/rxjs-page/rxjs-page.component';
import { TestingPageComponent } from '../testing/testing-page/testing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'rxjs', component: RxjsPageComponent },
      { path: 'testing', component: TestingPageComponent },
    ],
  },
  { path: '**', redirectTo: '' },

  // { path: 'xxx/:id', component: AppComponent },
];

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class LayoutModule {}
