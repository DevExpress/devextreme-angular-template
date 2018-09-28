import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    onItemClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    itemMenuClick(args) {
        this.onItemClick.next(args.itemData.action);
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
