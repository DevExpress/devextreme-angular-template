import { Component, OnInit, NgModule, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavigationMenuModule } from '../../shared/components';
import { HeaderModule } from '../../shared/components';
import { DxDrawerModule } from 'devextreme-angular/ui/drawer';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { CommonModule } from '@angular/common';

import { navigation } from '../../app-navigation';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
    menuItems = navigation;
    selectedRoute = '';

    @Input()
    menuOpened: boolean;

    @Input()
    title: string;

    menuMode = 'shrink';
    menuRevealMode = 'expand';
    minMenuSize = 0;
    shaderEnabled = false;

    constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

    ngOnInit() {
        this.menuOpened = this.isLargeScreen;

        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                this.selectedRoute = val.urlAfterRedirects;
            }
        });

        this.breakpointObserver
            .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
            .subscribe(() => this.updateDrawer());

        this.updateDrawer();
    }

    updateDrawer() {
        const isXSmall = this.breakpointObserver.isMatched(Breakpoints.XSmall);

        this.menuMode = this.isLargeScreen ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !this.isLargeScreen;
    }

    get isLargeScreen() {
        const isLarge = this.breakpointObserver.isMatched(Breakpoints.Large);
        const isXLarge = this.breakpointObserver.isMatched(Breakpoints.XLarge);

        return isLarge || isXLarge;
    }

    get sizeClasses() {
        return {
            'screen-x-small': this.breakpointObserver.isMatched(Breakpoints.XSmall),
            'screen-small': this.breakpointObserver.isMatched(Breakpoints.Small),
            'screen-medium': this.breakpointObserver.isMatched(Breakpoints.Medium),
            'screen-large': this.isLargeScreen,
        };
    }

    get hideMenuAfterNavigation() {
        return this.menuMode === 'overlap';
    }

    get showMenuAfterClick() {
        return !this.menuOpened;
    }

    navigationChanged(event) {
        const path = event.itemData.path;
        const pointerEvent = event.event;

        if (path && this.menuOpened) {
            if (event.node.selected) {
                pointerEvent.preventDefault();
            } else {
                this.router.navigate([path]);
            }

            if (this.hideMenuAfterNavigation) {
                this.menuOpened = false;
                pointerEvent.stopPropagation();
            }
        } else {
            pointerEvent.preventDefault();
        }
    }

    navigationClick() {
        if (this.showMenuAfterClick) {
            this.menuOpened = true;
        }
    }
}

@NgModule({
    imports: [ NavigationMenuModule, DxButtonModule, DxDrawerModule, HeaderModule, DxScrollViewModule, CommonModule ],
    exports: [ AppLayoutComponent ],
    declarations: [ AppLayoutComponent ]
})
export class AppLayoutModule { }
