import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetPageComponent } from './page/asset-page.component';

export const assetRoutes: Routes = [
  {
    path: 'asset',
    children: [{ path: '', redirectTo: '/asset/1', pathMatch: 'full' }, { path: ':id', component: AssetPageComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(assetRoutes)],
  exports: [RouterModule]
})
export class AssetRoutesModule {}
