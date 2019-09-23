import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { AnomalyListComponent } from './list/anomaly-list.component';
import { AnomalyPageComponent } from './page/anomaly-page.component';

// Module
import {
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatChipsModule
} from '@angular/material';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [AnomalyListComponent, AnomalyPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [AnomalyListComponent]
})
export class AnomalyModule {}
