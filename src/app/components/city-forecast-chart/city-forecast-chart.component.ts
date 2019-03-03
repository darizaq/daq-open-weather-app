import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Chart } from 'chart.js';

import { TemperaturePipe } from '../../pipes/temperature/temperature.pipe';

@Component({
  selector: 'app-city-forecast-chart',
  templateUrl: './city-forecast-chart.component.html',
  styleUrls: ['./city-forecast-chart.component.scss']
})
export class CityForecastChartComponent implements OnInit, OnChanges {

    @Input() data;
    @Input() limit;
    @Input() units;
    forecastChart: Chart;
    chartContext;

    chartConfig = {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                data: [],
                borderColor: '#f9a26c',
                fill: false
            }]
        },
        options: {
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 2
                }
            },
            scales: {
                xAxes: [{
                    display: true
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '',
                        fontSize: 20
                    },
                    display: true
                }],
            }
        }
    };

    constructor(private elementRef: ElementRef, private datePipe: DatePipe, private tempPipe: TemperaturePipe) { }

    ngOnInit() {
        this.chartContext = this.elementRef.nativeElement.querySelector('canvas');
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.data && changes.data.currentValue) {
            this.updateChartData(changes.data.currentValue, this.limit);
        }
        if (changes.limit && changes.limit.currentValue && this.data) {
            this.updateChartData(this.data, changes.limit.currentValue);
        }
        if (changes.units && changes.units.currentValue) {
            this.chartConfig.options.scales.yAxes[0].scaleLabel.labelString = this.tempPipe.transform(null, this.units, false);
        }
    }

    updateChartData(array: any[], items: number) {
        const data = array
            .map(record => record.main.temp)
            .slice(0, items);
        const labels = array
            .map(record => this.datePipe.transform(new Date(`${record.dt_txt.replace(' ', 'T')}.000Z`), 'd MMM h a'))
            .slice(0, items);
        if (this.forecastChart) {
            this.forecastChart.data.labels = labels;
            this.forecastChart.data.datasets[0].data = data;
            this.forecastChart.update();
        } else {
            this.chartConfig.data.datasets[0].data = data;
            this.chartConfig.data.labels = labels;
            this.forecastChart = new Chart(this.chartContext, this.chartConfig);
        }

    }

}

