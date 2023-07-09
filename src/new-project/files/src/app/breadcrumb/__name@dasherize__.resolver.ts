import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { <%= classify(name) %> } from '../<%= dasherize(name) %>/<%= dasherize(name) %>';
import { <%= classify(name) %>Service } from '../<%= dasherize(name) %>/<%= dasherize(name) %>.service';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Resolver implements Resolve<<%= classify(name) %>> {
  constructor(private readonly <%= classify(name) %>Service: <%= classify(name) %>Service){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<<%= classify(name) %>> {
    return this.<%= classify(name) %>Service.find(route.params['<%= classify(name) %>Id']);
    // return of(true);
  }
}
