import { Pipe, PipeTransform } from '@angular/core';

import { AppConstants } from '../../app.constants';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

    scale = {
        [AppConstants.UNIT_SYSTEMS.METRIC]: 'C',
        [AppConstants.UNIT_SYSTEMS.IMPERIAL]: 'F',
        [AppConstants.UNIT_SYSTEMS.STANDARD]: 'K'
    };

    transform(value: number, units: string): any {
        return `${!isNaN(value) && value !== null ? value : ''}°${this.scale[units]}`;
    }
}
