

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // ✅ Import this
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()), // ✅ Add this line
    { provide: 'disableHydration', useValue: true },   // (optional hydration config)
    provideHttpClient()
  ]
};
