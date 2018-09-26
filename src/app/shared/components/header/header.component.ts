import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxMenuModule } from 'devextreme-angular/ui/menu';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    @Output() menuToggle = new EventEmitter<boolean>();

    @Input()
    title: string;

    constructor() {}

    toggleMenu = () => {
        this.menuToggle.emit();
    }
}

@NgModule({
    imports: [
        CommonModule,
        DxPopupModule,
        DxMenuModule,
        DxToolbarModule
    ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})
export class HeaderModule { }
