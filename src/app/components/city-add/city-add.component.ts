import { Component, OnInit, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { WeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.scss']
})
export class CityAddComponent implements OnInit, OnDestroy {

    @Output() onWeatherData = new EventEmitter<Object>();
    @ViewChild('cityInput') cityInput;
    modalOpen: boolean;
    cityName: string;
    inputElm;
    alreadyExist: boolean;
    subscription: Subscription;
    error: string;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.inputElm = this.cityInput.nativeElement;

        this.subscription = fromEvent(this.inputElm, 'keyup')
            .pipe(
                debounceTime(300),
                map(value => {
                    const currentValue = this.inputElm.value.toLowerCase();
                    return this.weatherService.getCities()
                        .find(item => item.name.toLowerCase() === currentValue)
                })
            )
            .subscribe(value => {
                this.alreadyExist = value ? true : false;
            });
    }

    toggleModal() {
        this.modalOpen = !this.modalOpen;
        this.clearInput();
        if (this.modalOpen) {
            this.inputElm.focus();
        }
    }

    addCity() {
        this.weatherService.getCityWeather(this.cityName)
            .subscribe(
                data => {
                    this.onWeatherData.emit(data);
                    this.error = null;
                    this.toggleModal();
                },
                data => {
                    this.error = data.error.message;
                }
            );
    }

    clearInput() {
        if (this.cityName) {
            this.error = null;
            this.cityName = null;
            this.alreadyExist = false;
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
