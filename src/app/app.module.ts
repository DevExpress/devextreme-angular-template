import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PagesRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layouts/side-nav-outer-toolbar/layout.component';

import { FooterModule } from './shared/components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        FooterModule,
        AppLayoutModule,
        BrowserModule,
        PagesRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
