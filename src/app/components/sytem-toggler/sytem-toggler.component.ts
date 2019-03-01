import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppConstants } from '../../app.constants';
import { WeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-sytem-toggler',
  templateUrl: './sytem-toggler.component.html',
  styleUrls: ['./sytem-toggler.component.scss']
})
export class SytemTogglerComponent implements OnInit, OnDestroy {

    items: string[] = [];
    activeValue;
    unitsSubject;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        for (const i in AppConstants.UNIT_SYSTEMS) {
            if (AppConstants.UNIT_SYSTEMS.hasOwnProperty(i)) {
                this.items.push(AppConstants.UNIT_SYSTEMS[i]);
            }
        }
        this.unitsSubject = this.weatherService.unitsSubject.subscribe(
            value => this.activeValue = value
        );
    }

    changeUnitsSystem(event) {
        this.weatherService.switchUnitsSystem(event.target.value);
    }

    ngOnDestroy() {
        this.unitsSubject.unsubscribe();
    }

}
