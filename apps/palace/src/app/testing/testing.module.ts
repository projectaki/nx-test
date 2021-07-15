import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingPageComponent } from './testing-page/testing-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TestingPageComponent],
  imports: [CommonModule, SharedModule],
})
export class TestingModule {}
