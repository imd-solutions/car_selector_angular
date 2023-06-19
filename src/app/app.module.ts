import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Main Component
import { AppComponent } from './app.component';
// Supporting Components
import { SelectionBoxComponent } from './components/selection-box/selection-box/selection-box.component';
import { EventButtonComponent } from './components/event/event-button/event-button.component';
import { InputSelectComponent } from './components/input/input-select/input-select.component';
import { InputTextComponent } from './components/input/input-text/input-text.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SelectionBoxComponent,
    EventButtonComponent,
    InputSelectComponent,
    InputTextComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
