import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { WeatherListComponent } from './features/weather-list/weather-list.component';
import { ForecastComponent } from './features/forecast/forecast.component';
import { WeatherService } from './services/weather/weather.service';
import { EnvironmentService } from './services/environment/environment.service';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { CityForecastChartComponent } from './components/city-forecast-chart/city-forecast-chart.component';
import { TemperaturePipe } from './pipes/temperature/temperature.pipe';
import { SpeedPipe } from './pipes/speed/speed.pipe';
import { ErrorComponent } from './components/error/error.component';
import { SytemTogglerComponent } from './components/sytem-toggler/sytem-toggler.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';

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
    ErrorComponent,
    SytemTogglerComponent,
    CitySelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TemperaturePipe, DatePipe, WeatherService, EnvironmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
