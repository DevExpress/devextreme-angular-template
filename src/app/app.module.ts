import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderModule } from './shared/components';
import { NavigationMenuModule } from './shared/components';
import { PagesRoutingModule } from './app-routing.module';
import { DxSlideOutViewModule } from 'devextreme-angular/ui/slide-out-view';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        DxSlideOutViewModule,
        HeaderModule,
        NavigationMenuModule,
        BrowserModule,
        PagesRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
