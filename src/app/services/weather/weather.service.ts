import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppConstants } from '../../app.constants';
import { WeatherConstants } from './weather.constants';

@Injectable()
export class WeatherService {

    private units;
    private cities: Array<{id: number, name: string}>;
    unitsSubject: BehaviorSubject<string>;
    currentCity: Subject<{city: string, country: string}>;

    constructor(private httpClient: HttpClient) {
        this.cities = Array.isArray(WeatherConstants.INITIAL_CITES) ? WeatherConstants.INITIAL_CITES : [];
        this.currentCity = new Subject<{city: string, country: string}>();
        this.unitsSubject = new BehaviorSubject<string>(AppConstants.UNIT_SYSTEMS.METRIC);
        this.unitsSubject.subscribe(
            value => {
                this.units = value;
            }
        );
    }

    getCities() {
        return [...this.cities];
    }

    switchUnitsSystem(value) {
        if (this.units !== value) {
            this.unitsSubject.next(value);
        }
    }

    private addCity(city) {
        if (!this.cities.find(item => item.id === city.id)) {
            this.cities.unshift({id: city.id, name: city.name});
        }
        return city;
    }

    getCityWeather(cityName: string) {
        const url = `${WeatherConstants.BASE_URL}weather?q=${cityName}&units=${this.units}&appid=${WeatherConstants.API_KEY}`;

        return this.httpClient.get<Object>(url)
            .pipe(map(data => this.addCity(data)));
    }

    getForecastData(countryCode: string, city: string) {
        const url = `${WeatherConstants.BASE_URL}forecast?q=${city},${countryCode}&units=${this.units}&appid=${WeatherConstants.API_KEY}`;

        return this.httpClient.get<Object>(url);
    }

    getInitialData() {
        const cities = this.cities.map((city) => city.id).join(',');
        if (cities.length) {
            const url = `${WeatherConstants.BASE_URL}group?id=${cities}&units=${this.units}&appid=${WeatherConstants.API_KEY}`;

            return this.httpClient.get<Object>(url);
        }
        return of({list: []});
    }
}
