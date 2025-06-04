import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  GovFormControlsComponent,
  RatingComponentComponent,
  CountrySelectorComponent,
} from '@gov/form-controls';

@Component({
  imports: [
    NxWelcomeComponent,
    RouterModule,
    GovFormControlsComponent,
    RatingComponentComponent,
    CountrySelectorComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'library-app';
}
