import { Component, OnInit, DoCheck, Input, IterableDiffers } from '@angular/core';

import { EnvironmentService } from '../../services/environment/environment.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss']
})
export class CitySelectorComponent implements OnInit, DoCheck {

    @Input() cityList: Array<any>;
    @Input() units: string;
    activeItem: number;
    selectorOpen = false;
    basePath;
    iterableDiffer;

    constructor(private environmentService: EnvironmentService,
        private iterableDiffers: IterableDiffers) {
        this.basePath = this.environmentService.getValue('baseHref');
        this.iterableDiffer = this.iterableDiffers.find([]).create(null);
    }

    ngOnInit() { }

    ngDoCheck() {
        if (this.iterableDiffer.diff(this.cityList)) {
            this.activeItem = 0;
        }
    }

    activateItem(index) {
        this.activeItem = index;
        if (this.selectorOpen) {
            this.toggleSelector();
        }
    }

    toggleSelector() {
        this.selectorOpen = !this.selectorOpen;
    }

}
