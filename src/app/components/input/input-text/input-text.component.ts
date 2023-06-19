import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'InputText',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  constructor(private carService: CarService) {}
  @Input() name!: string;
  @Input() cssLabelClass!: string;
  @Input() labelText!: string;
  @Input() icon!: string;
  @Input() id!: string;
  @Input() type!: string;
  @Input() placeHolder!: string;
  @Input() cssInputClass!: string;
  @Input() cssClass!: string;
  @Input() disabledInput!: boolean;
  @Input() error!: boolean;
  @Input() errorMessage!: string;

  @Output() inputValue = new EventEmitter<string>();

  public value!: any;

  inputTextValue(event: any) {
    this.carService.updateSelectBtn(this.id);
    this.carService.updateResultsInformation(this.id, event.target.value);
    this.inputValue.emit(event.target.value);
  }
}
