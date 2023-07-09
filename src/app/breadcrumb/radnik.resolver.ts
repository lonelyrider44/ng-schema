import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Radnik } from '../radnik/radnik';
import { RadnikService } from '../radnik/radnik.service';

@Injectable({
  providedIn: 'root'
})
export class RadnikResolver implements Resolve<Radnik> {
  constructor(private readonly RadnikService: RadnikService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Radnik> {
    return this.RadnikService.find(route.params['RadnikId']);
    // return of(true);
  }
}
