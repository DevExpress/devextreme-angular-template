import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AboutComponent } from './pages/about/about.component'

export const routes: Routes = [{
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    }, {
        path: 'profile',
        component: ProfileComponent
    }, {
        path: 'settings',
        component: SettingsComponent
    }, {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ],
    declarations: [AboutComponent, SettingsComponent, ProfileComponent]
})
export class PagesRoutingModule {}
