import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

import { WeatherService } from '../../services/weather/weather.service';
import { EnvironmentService } from '../../services/environment/environment.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnChanges {

    @Input() cityData;
    @Input() units;
    @Input() active;
    basePath;

    constructor(private weatherService: WeatherService,
        private environmentService: EnvironmentService) {
        this.basePath = this.environmentService.getValue('baseHref');
    }

    ngOnChanges(changes: SimpleChanges) {
    	if (changes.active && changes.active.currentValue) {
    		this.seeForecastData();
    	}
    }

    seeForecastData() {
    	this.weatherService.currentCity.next({
    		city: this.cityData.name,
    		country: this.cityData.sys.country
    	});
    }

    getIconSrc(icon) {
        return `http://openweathermap.org/img/w/${icon}.png`;
    }
}
