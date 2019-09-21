import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { assetRoutes } from './views/asset/asset.routes';
import { errorRoutes } from './views/error/error.routes';

const routes: Routes = [{ path: '', redirectTo: '/asset/1', pathMatch: 'full' }, ...assetRoutes, ...errorRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
