import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './routes-components/dashboard/dashboard.component';
import { CityCurrentWeatherComponent } from './components/city-current-weather/city-current-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layouts-components/header/header.component';
import { FooterComponent } from './layouts-components/footer/footer.component';
import {MaterialModule} from './modules/material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { CitySearchComponent } from './components/city-search/city-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WeatherService} from './services/weather.service';
import { TempPipe } from './pipes/temp.pipe';
import { SpeedPipe } from './pipes/speed.pipe';
import { ForecastComponent } from './routes-components/forecast/forecast.component';
import { ControlsComponent } from './components/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CityCurrentWeatherComponent,
    HeaderComponent,
    FooterComponent,
    CitySearchComponent,
    TempPipe,
    SpeedPipe,
    ForecastComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
