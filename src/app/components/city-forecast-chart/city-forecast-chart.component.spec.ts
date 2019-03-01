import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityForecastChartComponent } from './city-forecast-chart.component';

describe('CityForecastChartComponent', () => {
  let component: CityForecastChartComponent;
  let fixture: ComponentFixture<CityForecastChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityForecastChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityForecastChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
