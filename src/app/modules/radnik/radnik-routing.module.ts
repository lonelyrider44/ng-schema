import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadnikFormComponent } from './radnik-form/radnik-form.component';
import { RadnikIndexComponent } from './radnik-index/radnik-index.component';
import { DetailsBasicComponent } from './details-basic/details-basic.component';
import { DetailsLayoutComponentComponent } from './details-layout-component/details-layout-component.component';
import { RadnikResolver } from '../breadcrumb/radnik.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: %= classify(name) %>IndexComponent },
  { path: 'unos', pathMatch: 'full', component: %= classify(name) %>FormComponent, data: { breadcrumb: "New radnik" } },
  {
    path: ':radnikId',
    component: DetailsLayoutComponentComponent,
    data: { breadcrumb: (data: any) => `${data.radnik.naziv}` },
    resolve: { radnik: RadnikResolver },
    children: [{
      // path: '', redirectTo: 'smene', pathMatch: 'full',
    },
    {
      path: 'osnovni-podaci',
      component: DetailsBasicComponent
      // loadChildren: () => import('../../modules/radnik/radnik.module').then(m => m.RadnikModule)
    }
  ]}, {
    path: ':kampId',
    data: { breadcrumb: (data: any) => `${data.radnik.naziv}` },
    resolve: { radnik: KampResolver },
    children: [
      { path: 'edit', component: %= classify(name) %>FormComponent, data: { breadcrumb: 'edit' } },
      { path: 'delete', component: %= classify(name) %>FormComponent, data: { breadcrumb: 'delete' } },
    ]
  },
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
export class RadnikRoutingModule { }
