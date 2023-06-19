import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private apiService: ApiService) {
    this.resultsChange.subscribe((value) => {
      this.results = value;
    });

    this.resultsInformationChange.subscribe((value) => {
      // console.log('Val', value);
      this.resultsInformation[value.id] = value.data;
    });
  }

  selectDisplay: any = {};

  selectBtn: any = {};
  results!: boolean;
  resultsInformation: any = {};

  resultsChange: Subject<boolean> = new Subject<boolean>();
  resultsInformationChange: Subject<any> = new Subject<any>();

  getSelections(): Observable<any> {
    return this.apiService.get('selections');
  }

  updateSelectBtn(id: string) {
    this.selectBtn[id] = false;
  }

  updateBtnStatus(id: string): Observable<any> {
    return this.apiService.patch(`selections/${id}`, { btnDisabled: false });
  }

  updateDisabledStatus(id: string): Observable<any> {
    return this.apiService.patch(`selections/${id}`, { disabled: false });
  }

  refreshData(selection: string, item: string): Observable<any> {
    return this.apiService.patch(`selections/${selection}`, { [item]: true });
  }

  updateResults() {
    this.resultsChange.next(!this.results);
  }

  updateResultsInformation(id: string, data: string) {
    // let test = { key: id, value: data };
    this.resultsInformationChange.next({ id, data });
  }
}
