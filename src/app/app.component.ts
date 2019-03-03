import { Component } from '@angular/core';

import { EnvironmentService } from './services/environment/environment.service';
import { AppConstants } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    socialLinks = AppConstants.SOCIAL_LINKS;
    basePath;

    constructor(private environmentService: EnvironmentService) {
        this.basePath = this.environmentService.getValue('baseHref');
    }
}
