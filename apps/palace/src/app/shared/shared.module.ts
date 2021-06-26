import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './layout/navbar.component';
import { FooterComponent } from './layout/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    NavbarComponent,
    FooterComponent,
    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
})
export class SharedModule {}
