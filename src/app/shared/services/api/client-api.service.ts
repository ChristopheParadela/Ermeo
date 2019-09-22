import { Injectable } from '@angular/core';
import { ApiService, ApiGetParamsData } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client, ClientParam } from '../../models/client';
import { Asset, AssetParam } from '../../models/asset';
import { Anomaly, AnomalyParam } from '../../models/anomaly';
import { ApiGetResponseDataAnomaly } from './anomaly-api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService extends ApiService {
  public getClient(clientId: number): Observable<Client> {
    return this.http.get(`/client/${clientId}`).pipe(
      map((clientParam: ClientParam) => {
        return new Client(clientParam);
      })
    );
  }

  public getAssetClient(clientId: number, assetId: number): Observable<Asset> {
    return this.http.get(`/client/${clientId}/asset/${assetId}`).pipe(
      map((assetParam: AssetParam) => {
        return new Asset(assetParam);
      })
    );
  }

  public getAnomaliesAssetClient(
    clientId: number,
    assetId: number,
    paramsList?: any
  ): Observable<ApiGetResponseDataAnomaly> {
    return this.http.get(`/client/${clientId}/asset/${assetId}/anomaly`, { params: paramsList }).pipe(
      map((response: ApiGetResponseDataAnomaly) => {
        if (response.hasOwnProperty('data')) {
          response.data = response.data.map(
            (anomalyParam: AnomalyParam): Anomaly => {
              return new Anomaly(anomalyParam);
            }
          );
        } else {
          throw new Error('api [GET] /anomaly: missing `data` entry in response');
        }

        return response;
      })
    );
  }
}
