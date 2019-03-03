import { Component, OnInit, Input } from '@angular/core';

import { EnvironmentService } from '../../services/environment/environment.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss']
})
export class CitySelectorComponent implements OnInit {

    @Input() cityList: Array<any>;
    @Input() units: string;
    activeItem = 0;
    selectorOpen = false;
    basePath;

    constructor(private environmentService: EnvironmentService) {
        this.basePath = this.environmentService.getValue('baseHref');
    }

    ngOnInit() { }

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
