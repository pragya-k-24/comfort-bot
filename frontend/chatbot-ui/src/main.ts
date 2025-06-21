import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // <-- make sure this is correct
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
