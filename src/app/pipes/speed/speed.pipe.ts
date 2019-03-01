import { Pipe, PipeTransform } from '@angular/core';

import { AppConstants } from '../../app.constants';

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {

    scale = {
        [AppConstants.UNIT_SYSTEMS.METRIC]: 'Km/h',
        [AppConstants.UNIT_SYSTEMS.IMPERIAL]: 'Mph',
        [AppConstants.UNIT_SYSTEMS.STANDARD]: 'Km/h'

    };

    transform(value: number, units: string): any {
        return `${!isNaN(value) && value !== null ? value : ''} ${this.scale[units]}`;
    }
}
