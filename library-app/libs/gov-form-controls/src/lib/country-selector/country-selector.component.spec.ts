import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountrySelectorComponent } from './country-selector.component';

describe('CountrySelectorComponent', () => {
  let component: CountrySelectorComponent;
  let fixture: ComponentFixture<CountrySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountrySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('countries should contain 5 countries', () => {
    expect(component.countries().length).toEqual(5);
  });

  it('should show 5 buttons', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button.flex');
    expect(buttons.length).toEqual(5);
  });

  it('buttons should show correct names', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button.flex');
    expect(buttons[0].textContent).toContain('HUN');
  });

  it('buttons should change the selected country', () => {
    const buttons: HTMLButtonElement[] =
      fixture.nativeElement.querySelectorAll('button.flex');
    buttons[2].click();

    fixture.detectChanges();

    expect(component.selected()).toEqual('NL');
  });
});
