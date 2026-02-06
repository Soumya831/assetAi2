import { Routes } from '@angular/router';
import { AppDashboard2Component } from './dashboard2/dashboard2.component';

export const DashboardsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard2',
        component: AppDashboard2Component,
        data: {
          title: 'Dashboard 2',
          breadcrumb: false,
        },
      },
    ],
  },
];
