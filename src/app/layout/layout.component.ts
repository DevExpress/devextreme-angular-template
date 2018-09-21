import { Component, OnInit, NgModule } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HeaderModule } from '../shared/components';
import { NavigationMenuModule } from '../shared/components';
import { DxDrawerModule } from 'devextreme-angular/ui/drawer';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';

import { navigation } from '../app-navigation';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
    menuItems = navigation;
    selectedRoute = '';

    menuOpened;
    menuMode = 'shrink';
    menuRevealMode = 'expand';
    minMenuSize = 0;
    shaderEnabled = false;

    constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

    ngOnInit() {
        this.menuOpened = this.isLargeScreen;

        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                this.selectedRoute = val.url;
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

    get hideMenuAfterNavigation() {
        return this.menuMode === 'overlap';
    }

    get showMenuAfterClick() {
        return !this.menuOpened;
    }

    navigationChanged(event) {
        const path = event.itemData.path;
        if (path && this.menuOpened) {
            this.router.navigate([path]);
        }

        if (this.hideMenuAfterNavigation) {
            this.menuOpened = false;
        }
    }

    navigationClick() {
        if (this.showMenuAfterClick) {
            this.menuOpened = true;
        }
    }
}

@NgModule({
    imports: [ HeaderModule, NavigationMenuModule, DxDrawerModule, DxScrollViewModule ],
    exports: [ AppLayoutComponent ],
    declarations: [ AppLayoutComponent ]
})
export class AppLayoutModule { }
