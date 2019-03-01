import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherListComponent } from './features/weather-list/weather-list.component';
import { ForecastComponent } from './features/forecast/forecast.component';
import { WeatherService } from './services/weather/weather.service';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { CityForecastChartComponent } from './components/city-forecast-chart/city-forecast-chart.component';
import { TemperaturePipe } from './pipes/temperature/temperature.pipe';
import { SpeedPipe } from './pipes/speed/speed.pipe';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';
import { SytemTogglerComponent } from './components/sytem-toggler/sytem-toggler.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    ForecastComponent,
    CityWeatherComponent,
    CityForecastComponent,
    CityForecastChartComponent,
    TemperaturePipe,
    SpeedPipe,
    NotFoundComponent,
    ErrorComponent,
    SytemTogglerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe, WeatherService, TemperaturePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
