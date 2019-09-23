import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetPageComponent } from './page/asset-page.component';
import { AnomalyPageComponent } from '../anomaly/page/anomaly-page.component';

export const assetRoutes: Routes = [
  {
    path: 'asset',
    redirectTo: '/asset/1',
    pathMatch: 'full'
  },
  {
    path: 'asset/:id',
    children: [
      {
        path: '',
        component: AssetPageComponent
      },
      {
        path: 'anomaly',
        children: [{ path: ':id', component: AnomalyPageComponent, pathMatch: 'full' }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(assetRoutes)],
  exports: [RouterModule]
})
export class AssetRoutesModule {}
