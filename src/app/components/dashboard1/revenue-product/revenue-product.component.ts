import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

// interface month {
//   value: string;
//   viewValue: string;
// }

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  type: string;
  hrate: string;
  skills: string;
  priority: string;
  progress: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/dash-prd-1.jpg',
    uname: 'Jenkins-Server',
    position: 'Jason Roy',
    type: 'Sever',
    skills: '3 days ago',
    hrate: '1299.00',
    priority: 'Low',
    progress: 'success',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/dash-prd-2.jpg',
    uname: 'Windows-server-2022',
    position: 'Mathew Flintoff',
    type: 'Sever',
    skills: '17 days ago',
    hrate: '899.00',
    priority: 'Medium',
    progress: 'warning',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/dash-prd-3.jpg',
    uname: 'Modernize Dashboard',
    position: 'Anil Kumar',
    type: 'Sever',
    skills: '13 days ago',
    hrate: '599.00',
    priority: 'Very High',
    progress: 'secondary',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Dashboard Co',
    position: 'George Cruize',
    type: 'Sever',
    skills: '20 days ago',
    hrate: '1299.00',
    priority: 'High',
    progress: 'error',
  },
];
@Component({
  selector: 'app-revenue-product',
  standalone: true,
  imports: [MaterialModule, MatMenuModule, MatButtonModule, CommonModule],
  templateUrl: './revenue-product.component.html',
})
export class AppRevenueProductComponent {
  displayedColumns: string[] = [
    'Resource',
    'Type',
    'Current',
    'Forecasted',
    'Created',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}
}
