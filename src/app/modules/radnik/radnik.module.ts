import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadnikRoutingModule } from './radnik-routing.module';
import { IndexComponent } from './radnik-index/radnik-index.component';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './radnik-form/radnik-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { CustomDateAdapter } from '../material/custom-date-adapter';
import { DetailsBasicComponent } from './details-basic/details-basic.component';
import { DetailsLayoutComponentComponent } from './details-layout-component/details-layout-component.component';
import { RadnikDatatableComponent } from './radnik-datatable/radnik-datatable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ComponentsModule } from 'app/components/components.module';


@NgModule({
  declarations: [
    RadnikIndexComponent,
    RadnikFormComponent,
    DetailsBasicComponent,
    DetailsLayoutComponentComponent,
    RadnikDatatableComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RadnikRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    NgxMatSelectSearchModule,
    ComponentsModule
  ],
  providers:[
    { provide: DateAdapter, useClass: CustomDateAdapter }
  ]
})
export class RadnikModule { }