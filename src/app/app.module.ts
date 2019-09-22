import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Module
import { AnomalyModule } from './views/anomaly/anomaly.module';
import { AssetModule } from './views/asset/asset.module';
import { ErrorModule } from './views/error/error.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AnomalyModule, AssetModule, BrowserAnimationsModule, ErrorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
