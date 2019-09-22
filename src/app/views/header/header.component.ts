import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ClientApiService } from 'src/app/shared/services/api/client-api.service';
import { Asset } from 'src/app/shared/models/asset';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ClientApiService]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() assetSelected: Asset;

  public client: Client;

  private sub: Subscription;

  constructor(private router: Router, private clientApiService: ClientApiService) {}

  ngOnInit() {
    this.assetSelected = this.assetSelected ? this.assetSelected : new Asset();

    this.getClient(1); // The id (1) is just for the test, to simulate the client.
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onSelectionChange(): void {
    this.router.navigate(['/asset/', this.assetSelected.id]);
  }

  private getClient(clientId: number): void {
    this.sub = this.clientApiService.getClient(clientId).subscribe(
      (client: Client) => {
        this.client = client;
      },
      error => {
        console.log('Error: ', error);
      }
    );
  }
}
