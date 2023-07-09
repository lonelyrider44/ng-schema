import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from '../shared/service';
import { <%= classify(name) %>, <%= classify(name) %>Status } from './<%= dasherize(name) %>';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service extends BaseService<<%= classify(name) %>>{
  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "<%= dasherize(name) %>";
  }

}
