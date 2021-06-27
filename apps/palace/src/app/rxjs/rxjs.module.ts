import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [RxjsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RxjsPageComponent],
})
export class RxjsModule {}
