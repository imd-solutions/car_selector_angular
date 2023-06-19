import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'SelectionBox',
  templateUrl: './selection-box.component.html',
  styleUrls: ['./selection-box.component.scss'],
})
export class SelectionBoxComponent implements OnInit {
  @Input() selection: any;

  constructor(private carService: CarService) {}

  ngOnInit(): void {}

  appBtns: any = this.carService.selectBtn;
  appDisplays: any = this.carService.selectDisplay;

  addSelectionItem(newItem: string) {
    this.appBtns[newItem] = true;
  }

  addDisplayItem(newItem: string) {
    this.appDisplays[newItem] = true;
    this.ngOnInit();
  }

  addInputItem(newItem: string) {
    this.appBtns[newItem] = true;
  }
}
