import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { WeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

    forecastLimit = 8;
    forecastData;
    error;
    city;
    country;
    units;
    forecastLimitSelector;
    unitsSubject: Subscription;
    citySubject: Subscription;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.citySubject = this.weatherService.currentCity
            .subscribe((value: {city: string, country: string}) => {
                this.city = value.city;
                this.country = value.country;
                this.getData();
            });

        this.unitsSubject = this.weatherService.unitsSubject.subscribe(
            (value: string) => {
                this.units = value;
                this.forecastData = null;
                this.error = null;
                if (this.city && this.country) {
                    this.getData();
                }
            }
        );
    }

    ngOnDestroy() {
        this.unitsSubject.unsubscribe();

    }

    getData() {
        this.weatherService.getForecastData(this.country, this.city)
            .subscribe(
                data => {
                    this.forecastData = data;
                    this.initLimitSelector(data['list'] && data['list'].length);
                    this.error = null;
                },
                data => {
                    this.error = {
                        title: 'Error retrieving forecast data',
                        message: data.error.message
                    };
                }
            );
    }

    initLimitSelector(listLength: number) {
        this.forecastLimitSelector = new Array(listLength).fill(null).map((item, index) => index + 1);
    }

    isLoading() {
        return this.city && this.country && !this.forecastData && !this.error;
    }

}
