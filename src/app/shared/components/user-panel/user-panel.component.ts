import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { DxListModule } from 'devextreme-angular/ui/list';
import { DxContextMenuModule } from 'devextreme-angular/ui/context-menu';

@Component({
    selector: 'user-panel',
    templateUrl: 'user-panel.component.html',
    styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent {
    @Input()
    menuItems: any;

    @Input()
    menuMode: string;

    @Output()
    logoutUser: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private router: Router) {
    }

    itemMenuClick(args) {
        if (args.itemData.text === 'Logout') {
            this.logoutUser.next(true);
        }
        if (args.itemData.text === 'Profile') {
            this.router.navigate(['/profile']);
        }
    }
}

@NgModule({
    imports: [
        DxListModule,
        DxContextMenuModule,
        CommonModule
    ],
    declarations: [ UserPanelComponent ],
    exports: [ UserPanelComponent ]
})
export class UserPanelModule { }
