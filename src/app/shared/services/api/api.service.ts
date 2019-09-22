import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ApiGetParamsData {
  public limit?: number;
  public page?: number;
  public filter?: string;
  public order?: string;
  public sortBy?: string;

  public constructor(values: object = {}) {
    Object.assign(this, values);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public constructor(public http: HttpClient) {}
}
