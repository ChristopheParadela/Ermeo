import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiGetParamsData } from 'src/app/shared/services/api/api.service';
import { ClientApiService } from 'src/app/shared/services/api/client-api.service';
import { Asset } from 'src/app/shared/models/asset';
import { ApiGetResponseDataAnomaly } from 'src/app/shared/services/api/anomaly-api.service';
import { MatTableDataSource, Sort } from '@angular/material';
import { Anomaly } from 'src/app/shared/models/anomaly';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-anomaly-list',
  templateUrl: './anomaly-list.component.html',
  styleUrls: ['./anomaly-list.component.scss']
})
export class AnomalyListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() private asset: Asset;

  public displayedColumns: string[] = [
    'indicator',
    'id',
    'status',
    'createdAt',
    'updatedAt',
    'criticity',
    'interventionDatePlanned',
    'interventionSummary'
  ];
  public sub: Subscription;
  public lengthData: number;
  public paramApi: ApiGetParamsData;
  public dataSource: MatTableDataSource<Anomaly>;

  constructor(private clientApiService: ClientApiService, private router: Router) {
    this.paramApi = new ApiGetParamsData({
      limit: 5,
      page: 1,
      order: 'desc',
      sortBy: 'id'
    });
  }

  ngOnInit() {
    this.getAnomalies();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.asset = changes.asset.currentValue;
    this.getAnomalies();
  }

  public applyFilter(filterValue: string): void {
    this.paramApi.filter = filterValue.toLowerCase();
    this.getAnomalies();
  }

  public onPageChange(event): void {
    this.paramApi.limit = event.pageSize;
    this.paramApi.page = event.pageIndex + 1;
    this.getAnomalies();
  }

  public onSortEvent(sort: Sort): void {
    this.paramApi.sortBy = sort.active;
    this.paramApi.order = sort.direction;

    this.getAnomalies();
  }

  public goToAnomalyDetailsPage(anomaly: Anomaly): void {
    this.router.navigateByUrl(`asset/${this.asset.id}/anomaly/${anomaly.id}`);
  }

  private getAnomalies(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }

    this.sub = this.clientApiService.getAnomaliesAssetClient(1, this.asset.id, this.paramApi).subscribe(
      // The id (1) is just for the test, to simulate the client.
      (response: ApiGetResponseDataAnomaly) => {
        this.setDataTable(response);
      },
      error => {
        console.log('Error: ', error);
      }
    );
  }

  private setDataTable(dataApi: ApiGetResponseDataAnomaly): void {
    this.dataSource = new MatTableDataSource<Anomaly>(dataApi.data);
    this.lengthData = dataApi.count;
  }
}
