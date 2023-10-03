import { Injectable } from '@angular/core';

import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private ApiUrl: string = apiServer.serverUrl

  constructor(private http: HttpClient) { }

  getProducto(){
    return this.http.get(`${this.ApiUrl}`);
  }
}
