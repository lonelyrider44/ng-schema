import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteInfo } from '../../shared/route-info';
import { <%= classify(name) %> } from '../<%= dasherize(name) %>';
import { <%= classify(name) %>Service } from '../<%= dasherize(name) %>.service';


export const ROUTES: RouteInfo[] = [
  // { path: 'osnovni-podaci', title: 'Osnovni podaci',  icon: 'dashboard', class: '' },
  { path: 'smene', title: 'Smene',  icon:'home', class: '' },
  // { path: 'dodatni-paketi', title: 'Dodatni paketi',  icon:'home', class: '' },
  // // { path: 'prijave', title: 'Prijave',  icon:'home', class: '' },
  // { path: 'ucesnici', title: 'Učesnici',  icon:'work_history', class: '' },
  // { path: 'uplate', title: 'Uplate',  icon:'people_alt', class: '' },
  // { path: 'oprema', title: 'Oprema',  icon:'manage_accounts', class: '' },
  // { path: 'smestaj', title: 'Smeštaj',  icon:'manage_accounts', class: '' },
  // { path: 'prevoz', title: 'Prevoz',  icon:'manage_accounts', class: '' },
  // { path: 'zahtev', title: 'Zahtevi',  icon:'manage_accounts', class: '' },
  // { path: 'prijava', title: 'Nova prijava',  icon:'manage_accounts', class: '' },
];
@Component({
  selector: 'app-<%= dasherize(name) %>-details-layout-component',
  templateUrl: './<%= dasherize(name) %>-details-layout-component.component.html',
  styleUrls: ['./<%= dasherize(name) %>-details-layout-component.component.scss']
})
export class <%= classify(name) %>DetailsLayoutComponentComponent implements OnInit {

  menuItems = ROUTES;
  constructor(private activatedRoute: ActivatedRoute, private <%= camelize(name) %>Service: <%= classify(name) %>Service) { }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe( ({<%= dasherize(name) %>}) => {
    //   this.<%= dasherize(name) %>= <%= dasherize(name) %>;
    // });
  }

}
