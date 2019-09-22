import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Component
import { HeaderComponent } from './header.component';

// Module
import { MatToolbarModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, MatSelectModule, MatToolbarModule],
  providers: []
})
export class HeaderModule {
  constructor() {}
}
