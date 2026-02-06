import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { AppRevenueProductComponent } from 'src/app/components/dashboard1/revenue-product/revenue-product.component';
import { AppAnnualProfitComponent } from 'src/app/components/dashboard2/annual-profit/annual-profit.component';
import { AppBlogCardComponent } from 'src/app/components/dashboard2/blog-card/blog-card.component';
import { CurrentMonthComponent } from 'src/app/components/dashboard2/current-month/current-month.component';
import { AppDailyActivitiesComponent } from 'src/app/components/dashboard2/daily-activities/daily-activities.component';
import { LastMonthComponent } from 'src/app/components/dashboard2/last-month/last-month.component';
import { MonthEndComponent } from 'src/app/components/dashboard2/month-end/month-end.component';
import { AppNewCustomersComponent } from 'src/app/components/dashboard2/new-customers/new-customers.component';
import { AppRevenueForecastComponent } from 'src/app/components/dashboard2/revenue-forecast/revenue-forecast.component';
import { AppSalesLocationsComponent } from 'src/app/components/dashboard2/sales-locations/sales-locations.component';
import { AppSubscriptionsComponent } from 'src/app/components/dashboard2/subscriptions/subscriptions.component';
import { AppTotalIncomeComponent } from 'src/app/components/dashboard2/total-income/total-income.component';
import { AppWeeklyScheduleComponent } from 'src/app/components/dashboard2/weekly-schedules/weekly-schedules.component';
import { AppWeeklyStatsComponent } from 'src/app/components/dashboard2/weekly-stats/weekly-stats.component';

@Component({
  selector: 'app-dashboard2',
  standalone: true,
  imports: [
    TablerIconsModule,

    AppSubscriptionsComponent,

    AppRevenueForecastComponent,
    AppRevenueProductComponent,
    AppAnnualProfitComponent,
    AppWeeklyScheduleComponent,
    AppNewCustomersComponent,
    AppTotalIncomeComponent,
    AppWeeklyStatsComponent,
    AppDailyActivitiesComponent,
    AppBlogCardComponent,
    AppSalesLocationsComponent,
    LastMonthComponent,
    CurrentMonthComponent,
    MonthEndComponent,
  ],
  templateUrl: './dashboard2.component.html',
})
export class AppDashboard2Component {
  constructor() {}
}
