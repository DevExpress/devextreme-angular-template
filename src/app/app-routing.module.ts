import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent, ProfileModule } from './pages/profile/profile.component';
import { SettingsComponent, SettingsModule } from './pages/settings/settings.component';
import { AboutComponent, AboutModule } from './pages/about/about.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }, {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Profile' }
  }, {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Settings' }
  }, {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  }
];

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(routes),
        SettingsModule,
        ProfileModule,
        AboutModule
    ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
