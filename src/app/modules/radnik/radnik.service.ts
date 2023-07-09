import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from '../shared/service';
import { Radnik, RadnikStatus } from './radnik';

@Injectable({
  providedIn: 'root'
})
export class RadnikService extends BaseService<Radnik>{
  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "radnik";
  }

}
