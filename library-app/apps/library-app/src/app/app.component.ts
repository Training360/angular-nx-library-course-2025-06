import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  GovFormControlsComponent,
  RatingComponentComponent,
} from '@gov/form-controls';

@Component({
  imports: [
    NxWelcomeComponent,
    RouterModule,
    GovFormControlsComponent,
    RatingComponentComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'library-app';
}
