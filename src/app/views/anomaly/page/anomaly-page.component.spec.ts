import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomalyPageComponent } from './anomaly-page.component';
import { HeaderModule } from '../../header/header.module';
import { RouterModule } from '@angular/router';

describe('AnomalyPageComponent', () => {
  let component: AnomalyPageComponent;
  let fixture: ComponentFixture<AnomalyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnomalyPageComponent],
      imports: [RouterModule.forRoot([]), HeaderModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnomalyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
