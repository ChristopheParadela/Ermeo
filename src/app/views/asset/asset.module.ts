import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { AssetPageComponent } from './page/asset-page.component';

// Route
import { AssetRoutesModule } from './asset.routes';

// Module
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [AssetPageComponent],
  imports: [CommonModule, AssetRoutesModule, HeaderModule]
})
export class AssetModule {}
