import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selections?: Selection[];

  constructor(private carService: CarService) {}

  get results(): boolean {
    return this.carService.results;
  }
  get resultsInformation(): any {
    return this.carService.resultsInformation;
  }

  ngOnInit() {
    const BtnArr = ['carMake', 'carColour', 'carCode'];
    const selectsArr = ['carColour', 'carCode'];

    BtnArr.map((btn) => {
      setTimeout(() => {
        this.carService.refreshData(btn, 'btnDisabled').subscribe();
      }, 5000);
    });

    setTimeout(() => {
      console.log('Waiting for 1st update to complete.');
    }, 3000);

    selectsArr.map((select) => {
      setTimeout(() => {
        this.carService.refreshData(select, 'disabled').subscribe({
          complete: () =>
            this.carService.getSelections().subscribe({
              next: (resp) => (this.selections = resp),
            }),
        });
      }, 5000);
    });
  }
}
