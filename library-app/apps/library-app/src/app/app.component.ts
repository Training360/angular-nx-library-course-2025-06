import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountrySelectorComponent } from '@gov/form-controls';

@Component({
  imports: [
    RouterModule,
    CountrySelectorComponent,
    ReactiveFormsModule,
    JsonPipe,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'library-app';

  formGroup: FormGroup = new FormGroup({
    cinema: new FormControl(''),
    movie: new FormControl(''),
    country: new FormControl(''),
  });
}
