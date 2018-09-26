import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { HomeComponent } from './pages/home/home.component';

import {
    DxDataGridModule,
    DxFormModule
} from 'devextreme-angular';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'profile',
        component: ProfileComponent
    }, {
        path: 'display-data',
        component: DisplayDataComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        DxDataGridModule,
        DxFormModule
    ],
    exports: [ RouterModule ],
    declarations: [HomeComponent, DisplayDataComponent, ProfileComponent]
})
export class PagesRoutingModule {}
