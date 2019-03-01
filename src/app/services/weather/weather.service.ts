import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppConstants } from '../../app.constants';
import { WeatherConstants } from './weather.constants';

@Injectable()
export class WeatherService {

    private units;
    unitsSubject;

    constructor(private httpClient: HttpClient) {
        this.unitsSubject = new BehaviorSubject<string>(AppConstants.UNIT_SYSTEMS.METRIC);
        this.unitsSubject.subscribe(
            value => {
                this.units = value;
            }
        );
    }

    switchUnitsSystem(value) {
        if (this.units !== value) {
            this.unitsSubject.next(value);
        }
    }

    getForecastData(countryCode: string, city: string) {
        const url = `${WeatherConstants.BASE_URL}forecast?q=${city},${countryCode}&units=${this.units}&appid=${WeatherConstants.API_KEY}`;

        return this.httpClient.get<Object>(url)
            .pipe(map(data => ({
                ...data,
                units: this.units,
                list: data['list'].map(item => ({
                    ...item
                }))
            })));
    }

    getInitialData() {
        const cities = WeatherConstants.INITIAL_CITES.map((city) => city.id).join(',');
        const url = `${WeatherConstants.BASE_URL}group?id=${cities}&units=${this.units}&appid=${WeatherConstants.API_KEY}`;

        return this.httpClient.get<Object>(url)
            .pipe(map(data => ({
                ...data,
                units: this.units
            })));
    }
}
