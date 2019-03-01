import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent {

    @Input() cityData;
    @Input() units;

    constructor(private router: Router) { }

    seeForecastData() {
        this.router.navigate(['/', this.cityData.sys.country, this.cityData.name]);
    }
}
