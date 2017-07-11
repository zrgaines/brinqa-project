import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'importance',
  template: `
    <button type="button" (click)="decrement()">-</button>
      {{counterValue}}
    <button type="button" (click)="increment()">+</button>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImportanceComponent),
      multi: true
    }
  ]
})
export class ImportanceComponent implements ControlValueAccessor {

  @Input()
  _counterValue = 0;

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }

  registerOnTouched() {}
}