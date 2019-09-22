import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// Component
import { AssetPageComponent } from './page/asset-page.component';

// Route
import { AssetRoutesModule } from './asset.routes';

// Module
import { HeaderModule } from '../header/header.module';
import { AnomalyModule } from '../anomaly/anomaly.module';
import { MatCardModule, MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [AssetPageComponent],
  imports: [
    CommonModule,
    AnomalyModule,
    AssetRoutesModule,
    FlexLayoutModule,
    HeaderModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class AssetModule {}
