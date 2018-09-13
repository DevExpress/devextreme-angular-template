import { Component, OnInit, NgModule } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HeaderModule } from '../shared/components';
import { NavigationMenuModule } from '../shared/components';
import { DxDrawerModule } from 'devextreme-angular/ui/drawer';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
    menuOpened = false;
    menuMode = 'shrink';
    menuRevealMode = 'expand';
    minMenuWidth = 0;
    shaderEnabled = false;

    constructor(private breakpointObserver: BreakpointObserver) { }

    ngOnInit() {
        this.breakpointObserver
            .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
            .subscribe(() => this.updateDrawer());

        this.updateDrawer();
    }

    updateDrawer() {
        const isXSmall = this.breakpointObserver.isMatched(Breakpoints.XSmall);
        const isLarge = this.breakpointObserver.isMatched(Breakpoints.Large);
        const isXLarge = this.breakpointObserver.isMatched(Breakpoints.XLarge);

        this.menuMode = isLarge || isXLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuWidth = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge && !isXLarge;
    }

    get hideMenuAfterNavigation() {
        return this.menuMode === 'overlap';
    }

    navigationChanged(e) {
        if (this.hideMenuAfterNavigation) {
            this.menuOpened = false;
        }
    }
}

@NgModule({
    imports: [ HeaderModule, NavigationMenuModule, DxDrawerModule, DxScrollViewModule ],
    exports: [ AppLayoutComponent ],
    declarations: [ AppLayoutComponent ]
})
export class AppLayoutModule { }
