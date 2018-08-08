import { Component, OnInit, NgModule } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HeaderModule } from '../shared/components';
import { NavigationMenuModule } from '../shared/components';
import { DxDrawerModule } from 'devextreme-angular/ui/drawer';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
    menuVisible = true;
    menuMode = 'persistent';
    menuShowMode = 'shrink';
    minMenuWidth = 0;
    shaderEnabled = false;

    constructor(private breakpointObserver: BreakpointObserver) { }

    ngOnInit() {
        this.breakpointObserver
            .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
            .subscribe(() => {
                const isXSmall = this.breakpointObserver.isMatched(Breakpoints.XSmall);
                const isLarge = this.breakpointObserver.isMatched(Breakpoints.Large);

                this.menuMode = isLarge ? 'persistent' : 'temporary';
                this.menuShowMode = isXSmall ? 'slide' : 'shrink';
                this.minMenuWidth = isXSmall ? 0 : 50;
                this.shaderEnabled = isLarge ? false : true;
        });
    }
}

@NgModule({
    imports: [ HeaderModule, NavigationMenuModule, DxDrawerModule ],
    exports: [ AppLayoutComponent ],
    declarations: [ AppLayoutComponent ]
})
export class AppLayoutModule { }
