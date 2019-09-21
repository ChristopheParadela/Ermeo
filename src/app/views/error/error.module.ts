import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { ErrorRoutesModule } from './error.routes';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, ErrorRoutesModule],
  exports: []
})
export class ErrorModule {}
