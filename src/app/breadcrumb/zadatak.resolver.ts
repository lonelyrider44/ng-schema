import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Zadatak } from '../zadatak/zadatak';
import { ZadatakService } from '../zadatak/zadatak.service';

@Injectable({
  providedIn: 'root'
})
export class ZadatakResolver implements Resolve<Zadatak> {
  constructor(private readonly ZadatakService: ZadatakService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Zadatak> {
    return this.ZadatakService.find(route.params['ZadatakId']);
    // return of(true);
  }
}
