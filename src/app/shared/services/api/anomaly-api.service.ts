import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Anomaly } from '../../models/anomaly';

export interface ApiGetResponseDataAnomaly {
  data: Anomaly[];
  count?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AnomalyApiService extends ApiService {}
