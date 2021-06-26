import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './layout/navbar.component';
import { FooterComponent } from './layout/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, MatGridListModule, MatToolbarModule, MatIconModule],
  exports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    NavbarComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
