import { Component, ViewChild } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexTooltip,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { MaterialModule } from '../../../material.module';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  labels: string[];
};

@Component({
  selector: 'app-revenue-forecast',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule, NgApexchartsModule],
  templateUrl: './revenue-forecast.component.html',
})
export class AppRevenueForecastComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public doughnutChartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.doughnutChartOptions = {
      series: [45, 15, 27, 18, 35],
      chart: {
        id: 'donut-chart',
        type: 'donut',
        height: 350,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        foreColor: '#adb0bb',
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70px',
          },
        },
      },
      legend: {
        show: true,
        position: 'bottom',
        width: '50px',
      },
      colors: ['#5D87FF', '#ECF2FF', '#49BEFF', '#E8F7FF', '#FFAE1F'],
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
      },
    };
  }
}
