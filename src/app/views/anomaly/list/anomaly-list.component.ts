import { Component, OnInit } from '@angular/core';

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
export class AnomalyListComponent implements OnInit {
  displayedColumns: string[] = ['indicator', 'status', 'createdAt', 'updatedAt', 'criticity'];
  dataSource = [
    {
      status: 'Created',
      createdAt: '2019-09-21T06:31:08.836Z',
      updatedAt: '14/12/2019',
      criticity: { min: 1, max: 100, value: 50 }
    },
    {
      status: 'Pending',
      createdAt: '2019-09-21T06:31:08.836Z',
      updatedAt: '14/12/2019',
      criticity: { min: 1, max: 100, value: 50 }
    },
    {
      status: 'In Progress',
      createdAt: '2019-09-21T06:31:08.836Z',
      updatedAt: '14/12/2019',
      criticity: { min: 1, max: 100, value: 50 }
    },
    {
      status: 'Resolved',
      createdAt: '2019-09-21T06:31:08.836Z',
      updatedAt: '14/12/2019',
      criticity: { min: 1, max: 100, value: 50 }
    },
    {
      status: 'Pending',
      createdAt: '2019-09-21T06:31:08.836Z',
      updatedAt: '14/12/2019',
      criticity: { min: 1, max: 100, value: 50 }
    },
    {
      status: 'In Progress',
      createdAt: '2019-09-21T06:31:08.836Z',
      updatedAt: '14/12/2019',
      criticity: { min: 1, max: 100, value: 50 }
    },
    {
      status: 'Resolve',
      createdAt: '2019-09-21T06:31:08.836Z',
      updatedAt: '14/12/2019',
      criticity: { min: 1, max: 100, value: 50 }
    },
    {
      status: 'Resolved',
      createdAt: '2019-09-21T06:31:08.836Z',
      updatedAt: '14/12/2019',
      criticity: { min: 1, max: 100, value: 50 }
    },
    {
      status: 'Pending',
      createdAt: '2019-09-21T06:31:08.836Z',
      updatedAt: '14/12/2019',
      criticity: { min: 1, max: 100, value: 50 }
    },
    {
      status: 'Pending',
      createdAt: '2019-09-21T06:31:08.836Z',
      updatedAt: '14/12/2019',
      criticity: { min: 1, max: 100, value: 50 }
    }
  ];

  constructor() {}

  ngOnInit() {}

  public applyFilter(filterValue: string): void {}
}
