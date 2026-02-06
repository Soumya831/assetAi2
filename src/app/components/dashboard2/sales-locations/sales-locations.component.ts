import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-sales-locations',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sales-locations.component.html',
})
export class AppSalesLocationsComponent {}
