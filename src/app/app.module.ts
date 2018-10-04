import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PagesRoutingModule } from './app-routing.module';
import {
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule
} from './layouts';

import { FooterModule } from './shared/components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        FooterModule,
        SideNavOuterToolbarModule,
        SideNavInnerToolbarModule,
        BrowserModule,
        PagesRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
