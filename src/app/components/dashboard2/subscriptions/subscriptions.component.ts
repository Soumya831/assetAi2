import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';

// export interface subscriptionChart {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   tooltip: ApexTooltip;
//   stroke: ApexStroke;
//   legend: ApexLegend;
//   responsive: ApexResponsive;
// }

export interface totalincomeChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  fill: ApexFill;
}

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './subscriptions.component.html',
})
export class AppSubscriptionsComponent {
  // @ViewChild('chart') chart: ChartComponent = Object.create(null);
  // public subscriptionChart!: Partial<subscriptionChart> | any;

  // constructor() {
  //   this.subscriptionChart = {
  //     series: [
  //       {
  //         name: 'Site A',
  //         data: [29, 52, 38, 47, 56, 41, 46],
  //       },
  //       {
  //         name: 'Site B',
  //         data: [71, 71, 71, 71, 71, 71, 71],
  //       },
  //     ],

  //     chart: {
  //       type: 'bar',
  //       height: 98,
  //       stacked: true,
  //       fontFamily: 'inherit',
  //       foreColor: '#adb0bb',
  //       toolbar: {
  //         show: false,
  //       },
  //       sparkline: {
  //         enabled: true,
  //       },
  //     },
  //     colors: ['#ffffff', 'rgba(255,255,255,0.5)'],
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: '26%',
  //         borderRadius: [3],
  //         borderRadiusApplication: 'end',
  //         borderRadiusWhenStacked: 'all',
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     tooltip: {
  //       theme: 'dark',
  //       x: {
  //         show: false,
  //       },
  //     },
  //   };
  // }

   @ViewChild('chart') chart: ChartComponent = Object.create(null);
    public totalincomeChart!: Partial<totalincomeChart> | any;
  
    constructor() {
      this.totalincomeChart = {
        series: [
          {
            name: 'Income',
            color: 'rgba(255, 102, 146, 1)',
            data: [30, 25, 35, 20, 30, 40],
          },
        ],
  
        chart: {
          type: 'line',
          height: 60,
          sparkline: {
            enabled: true,
          },
          group: 'sparklines',
          fontFamily: 'inherit',
          foreColor: '#adb0bb',
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        markers: {
          size: 0,
        },
        tooltip: {
          theme: 'dark',
          fixed: {
            enabled: true,
            position: 'right',
          },
          x: {
            show: false,
          },
        },
      };
    }
}
