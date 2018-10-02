import { Injectable } from '@angular/core';

export class SubjectDataService {

  data = [{
    Name: '.Net'
  },
  {
    Name: '.Net Core'
  },
  {
    Name: 'Java'
  },
  {
    Name: 'TypeScript'
  }];

  getData() {
    return this.data;
  }
}
