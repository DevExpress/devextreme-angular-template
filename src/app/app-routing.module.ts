import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AboutComponent } from './pages/about/about.component'

export const routes: Routes = [{
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', icon: 'home' },
    children: [
        {
            path: 'profile',
            component: ProfileComponent,
            data: { title: 'Profile' }
        }, {
            path: 'settings',
            component: SettingsComponent,
            data: { title: 'Settings' }
        }
    ]}, {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About', icon: 'info' }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ],
    declarations: [AboutComponent, SettingsComponent, ProfileComponent, HomeComponent]
})
export class PagesRoutingModule {}
