import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

const routes: Routes = [];

@NgModule({
  declarations: [RxjsPageComponent],
  imports: [CommonModule, HighlightModule, RouterModule.forChild(routes)],
  exports: [RxjsPageComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
      },
    },
  ],
})
export class RxjsModule {}
