import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'InputSelect',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent {
  constructor(private carService: CarService) {}

  @Input() name!: string;
  @Input() label!: string;
  @Input() id!: string;
  @Input() placeHolder!: string;
  @Input() cssClass!: string;
  @Input() options!: any[];
  @Input() disabledSelect!: boolean;

  @Output() updateSelectionInfo = new EventEmitter();

  updateBtnStatus(id: string, target: any) {
    console.log('VALUE', target.value);
    this.carService.updateBtnStatus(id).subscribe({
      next: () => {
        this.carService.updateSelectBtn(id);
        this.carService.updateResultsInformation(id, target.value);
        this.updateSelectionInfo.emit(id);
      },
    });
  }
}
