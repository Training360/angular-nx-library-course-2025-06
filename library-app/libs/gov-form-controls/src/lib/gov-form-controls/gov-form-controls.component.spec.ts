import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovFormControlsComponent } from './gov-form-controls.component';

describe('GovFormControlsComponent', () => {
  let component: GovFormControlsComponent;
  let fixture: ComponentFixture<GovFormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovFormControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
