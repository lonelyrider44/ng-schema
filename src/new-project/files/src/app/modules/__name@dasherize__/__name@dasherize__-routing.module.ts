import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { <%= classify(name) %>FormComponent } from './<%= dasherize(name) %>-form/<%= dasherize(name) %>-form.component';
import { <%= classify(name) %>IndexComponent } from './<%= dasherize(name) %>-index/<%= dasherize(name) %>-index.component';
import { <%= classify(name) %>DetailsBasicComponent } from './<%= dasherize(name) %>-details-basic/<%= dasherize(name) %>-details-basic.component';
import { <%= classify(name) %>DetailsLayoutComponentComponent } from './<%= dasherize(name) %>-details-layout-component/<%= dasherize(name) %>-details-layout-component.component';
import { <%= classify(name) %>Resolver } from '../breadcrumb/<%= dasherize(name) %>.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: %= classify(name) %>IndexComponent },
  { path: 'unos', pathMatch: 'full', component: %= classify(name) %>FormComponent, data: { breadcrumb: "New <%= name %>" } },
  {
    path: ':<%= camelize(name) %>Id',
    component: <%= classify(name) %>DetailsLayoutComponentComponent,
    data: { breadcrumb: (data: any) => `${data.<%= camelize(name) %>.naziv}` },
    resolve: { <%= camelize(name) %>: <%= classify(name) %>Resolver },
    children: [{
      // path: '', redirectTo: 'smene', pathMatch: 'full',
    },
    {
      path: 'osnovni-podaci',
      component: <%= classify(name) %>DetailsBasicComponent
      // loadChildren: () => import('../../modules/<%= dasherize(name) %>/<%= dasherize(name) %>.module').then(m => m.<%= classify(name) %>Module)
    }
  ]}, {
    path: ':<%= camelize(name) %>Id',
    data: { breadcrumb: (data: any) => `${data.<%= underscore(name) %>.naziv}` },
    resolve: { <%= underscore(name) %>: <%= classify(name) %>Resolver },
    children: [
      { path: 'edit', component: <%= classify(name) %>FormComponent, data: { breadcrumb: 'edit' } },
      { path: 'delete', component: <%= classify(name) %>FormComponent, data: { breadcrumb: 'delete' } },
    ]
  },
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
export class <%= classify(name) %>RoutingModule { }
