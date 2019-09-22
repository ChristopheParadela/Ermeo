import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomalyListComponent } from './anomaly-list.component';
import { MatChipsModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AnomalyListComponent', () => {
  let component: AnomalyListComponent;
  let fixture: ComponentFixture<AnomalyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnomalyListComponent],
      imports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnomalyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
