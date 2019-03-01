import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { WeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

    forecastLimit = 8;
    editMode = false;
    forecastData;
    error;
    city;
    country;
    units;
    unitsSubject;
    forecastLimitSelector;

    constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

    ngOnInit() {
        this.city = this.route.snapshot.params['city'];
        this.country = this.route.snapshot.params['country'];

        this.unitsSubject = this.weatherService.unitsSubject.subscribe(
            value => {
                this.units = value;
                this.forecastData = null;
                this.error = null;
                this.weatherService.getForecastData(this.country, this.city)
                .subscribe(
                    data => {
                        this.forecastData = data;
                        this.initLimitSelector(data.list && data.list.length);
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
        );
    }

    ngOnDestroy() {
        this.unitsSubject.unsubscribe();
    }

    initLimitSelector(listLength: number) {
        this.forecastLimitSelector = new Array(listLength).fill(null).map((item, index) => index + 1);
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }

}
