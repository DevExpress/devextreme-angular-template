import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PagesRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/layout.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppLayoutModule,
        BrowserModule,
        PagesRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
