import themes from 'devextreme/ui/themes';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

themes.initialized(() => {
  bootstrapApplication(App, appConfig)
    .catch((err) => console.error(err));
});
