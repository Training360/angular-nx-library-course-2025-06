import { Component, input, signal } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface ICountryCode {
  code: string;
  name: string;
}

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
  counties = input<ICountryCode[]>([
    { code: 'HU', name: 'HUN' },
    { code: 'US', name: 'USA' },
    { code: 'NL', name: 'NLD' },
    { code: 'JM', name: 'JAM' },
    { code: 'SZ', name: 'SWZ' },
  ]);

  selected = signal<string>('');

  disabled = signal<boolean>(false);

  private onChanged!: (v: string) => void;

  private onTouched!: () => void;

  selectCountry(code: string): void {
    this.onTouched();
    this.selected.set(code);
    this.onChanged(code);
  }

  writeValue(value: string): void {
    this.selected.set(value);
  }

  registerOnChange(fn: (v: string) => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
