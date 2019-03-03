import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable()
export class EnvironmentService {
    environment;

    constructor() {
        this.environment = environment;
    }

    getValue(key: string) {
        return this.environment[key];
    }
}
