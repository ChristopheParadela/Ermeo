import { Component, OnInit, OnDestroy } from '@angular/core';
import { Asset } from 'src/app/shared/models/asset';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientApiService } from 'src/app/shared/services/api/client-api.service';

@Component({
  selector: 'app-asset-page',
  templateUrl: './asset-page.component.html',
  styleUrls: ['./asset-page.component.scss']
})
export class AssetPageComponent implements OnInit, OnDestroy {
  public asset: Asset;

  private sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private clientApiService: ClientApiService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.getAsset(parseInt(params.get('id'), 10));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getAsset(assetId: number): void {
    this.sub = this.clientApiService.getAssetClient(1, assetId).subscribe(
      // The id (1) is just for the test, to simulate the client.
      (asset: Asset) => {
        this.asset = asset;
      },
      error => {
        console.log('Error: ', error);
      }
    );
  }
}
