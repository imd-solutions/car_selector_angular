import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'EventButton',
  templateUrl: './event-button.component.html',
  styleUrls: ['./event-button.component.scss'],
})
export class EventButtonComponent {
  constructor(private carService: CarService) {}

  @Input() id!: string;
  @Input() nextId!: string;
  @Input() btnCss!: string;
  @Input() topClass!: string;
  @Input() btnText!: string;
  @Input() btnDisabled!: boolean;

  @Output() updateDisplay = new EventEmitter<string>();

  updateSelectBox(id: string) {
    this.carService.updateDisabledStatus(id).subscribe({
      next: () => this.updateDisplay.emit(id),
    });
  }

  updateResultBox() {
    this.carService.updateResults();
  }
}
