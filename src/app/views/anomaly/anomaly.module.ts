import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { AnomalyListComponent } from './list/anomaly-list.component';

// Module
import {
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  declarations: [AnomalyListComponent],
  imports: [
    CommonModule,
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
