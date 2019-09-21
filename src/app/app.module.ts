import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Module
import { AssetModule } from './views/asset/asset.module';
import { ErrorModule } from './views/error/error.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AssetModule, ErrorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
