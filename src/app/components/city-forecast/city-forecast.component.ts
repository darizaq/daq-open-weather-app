import { Component, OnInit, Input } from '@angular/core';

import { EnvironmentService } from '../../services/environment/environment.service';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {

    @Input() data;
    @Input() limit;
    @Input() units;
    basePath;

    constructor(private environmentService: EnvironmentService) {
        this.basePath = this.environmentService.getValue('baseHref');
    }

    ngOnInit() { }

    transformDate(date): Date {
        return  new Date(`${date.replace(' ', 'T')}.000Z`);
    }

}
