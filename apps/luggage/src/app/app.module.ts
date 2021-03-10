import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LuggageFeatureCheckinModule } from '@flight-workspace/luggage/feature-checkin';
import { HttpClientModule } from '@angular/common/http';
import { LuggageFeatureReportLossModule } from '@flight-workspace/luggage/feature-report-loss';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LuggageFeatureCheckinModule, HttpClientModule, LuggageFeatureReportLossModule, EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
