import { Component, signal } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-country-selector',
  imports: [CommonModule, LowerCasePipe],
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CountrySelectorComponent,
      multi: true,
    },
  ],
})
export class CountrySelectorComponent implements ControlValueAccessor {
  selected = signal<string>('');

  private onChanged!: (v: string) => void;

  writeValue(value: string): void {
    this.selected.set(value);
  }

  registerOnChange(fn: (v: string) => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
