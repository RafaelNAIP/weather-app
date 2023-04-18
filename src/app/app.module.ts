import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { WeatherLeftInfosContainerComponent } from './Components/weather-left-infos-container/weather-left-infos-container.component';
import { WeatherRightInfosContainerComponent } from './Components/weather-right-infos-container/weather-right-infos-container.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { WeatherCardInfoComponent } from './weather-card-info/weather-card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherLeftInfosContainerComponent,
    WeatherRightInfosContainerComponent,
    WeatherCardInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
