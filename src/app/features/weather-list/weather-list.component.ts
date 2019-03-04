import { Component, OnInit, OnDestroy } from '@angular/core';

import { WeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit, OnDestroy {

    units;
    weatherListData;
    error;
    unitsSubject;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.unitsSubject = this.weatherService.unitsSubject.subscribe(
            value => {
                this.units = value;
                this.weatherListData = null;
                this.error = null;
                this.weatherService.getInitialData().subscribe(
                    data => {
                        this.weatherListData = data['list'];
                    },
                    data => {
                        this.error = {
                            message: data.error.message
                        };
                    }
                );
            }
        );
    }

    addCityData(data) {
        if (Array.isArray(this.weatherListData)) {
            this.weatherListData.unshift(data);
        } else {
            this.weatherListData = [data];
        }
    }

    ngOnDestroy() {
        this.unitsSubject.unsubscribe();
    }

}
