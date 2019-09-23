import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPageComponent } from './asset-page.component';
import { HeaderModule } from '../../header/header.module';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { AnomalyModule } from '../../anomaly/anomaly.module';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

describe('AssetPageComponent', () => {
  let component: AssetPageComponent;
  let fixture: ComponentFixture<AssetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssetPageComponent],
      imports: [
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        NoopAnimationsModule,
        HeaderModule,
        AnomalyModule,
        MatCardModule,
        MatDividerModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
