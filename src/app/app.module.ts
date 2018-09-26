import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PagesRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/layout.component';

import { HeaderModule } from './shared/components/header/header.component';
import { FooterModule } from './shared/components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HeaderModule,
        FooterModule,
        AppLayoutModule,
        BrowserModule,
        PagesRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
