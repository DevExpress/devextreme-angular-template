import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from '../login/login.component';
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

    showLoginPopup = false;
    userLogin = 'Sandra Johnson';
    isUserAuthorized = true;

    constructor() {}

    toggleMenu = () => {
        this.menuToggle.emit();
    }

    onShowLoginPopup = () => {
        this.showLoginPopup = true;
    }

    loginClick(args) {
        this.userLogin = args.login;
        this.showLoginPopup = false;
        this.isUserAuthorized = true;
    }

    logoutClick(args) {
        if (args.itemData.text === 'Logout') {
            this.isUserAuthorized = false;
        }
    }
}

@NgModule({
    imports: [
        CommonModule,
        DxPopupModule,
        DxMenuModule,
        DxToolbarModule,
        LoginModule
    ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})
export class HeaderModule { }
