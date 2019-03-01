import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {

    @Input() data;
    @Input() limit;
    @Input() units;

    constructor() { }

    ngOnInit() { }

    transformDate(date): Date {
        return  new Date(`${date.replace(' ', 'T')}.000Z`);
    }

}
