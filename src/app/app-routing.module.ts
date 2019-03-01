import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { WeatherListComponent } from './features/weather-list/weather-list.component';
import { ForecastComponent } from './features/forecast/forecast.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: WeatherListComponent,
        pathMatch: 'full'
    },
    {
        path: ':country/:city',
        component: ForecastComponent,
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: environment.useHashRoutes})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
