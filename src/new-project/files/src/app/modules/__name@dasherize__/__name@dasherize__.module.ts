import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from 'app/components/components.module';
import { DateAdapter } from '@angular/material/core';
import { CustomDateAdapter } from '../material/custom-date-adapter';

import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';
import { <%= classify(name) %>IndexComponent } from './<%= dasherize(name) %>-index/<%= dasherize(name) %>-index.component';
import { <%= classify(name) %>FormComponent } from './<%= dasherize(name) %>-form/<%= dasherize(name) %>-form.component';
import { <%= classify(name) %>DetailsBasicComponent } from './<%= dasherize(name) %>-details-basic/<%= dasherize(name) %>-details-basic.component';
import { <%= classify(name) %>DetailsLayoutComponentComponent } from './<%= dasherize(name) %>-details-layout-component/<%= dasherize(name) %>-details-layout-component.component';
import { <%= classify(name) %>DtComponent } from './<%= dasherize(name) %>-dt/<%= dasherize(name) %>-dt.component';


@NgModule({
  declarations: [
    <%= classify(name) %>IndexComponent,
    <%= classify(name) %>FormComponent,
    <%= classify(name) %>DetailsBasicComponent,
    <%= classify(name) %>DetailsLayoutComponentComponent,
    <%= classify(name) %>DtComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    <%= classify(name) %>RoutingModule,
  ],
  providers:[
    { provide: DateAdapter, useClass: CustomDateAdapter }
  ]
})
export class <%= classify(name) %>Module { }