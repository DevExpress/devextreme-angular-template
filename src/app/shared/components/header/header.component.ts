import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from '../login/login.component';
import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
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
    isUserAuthorized = true;
    userMenu = [{
        text: 'Profile',
        icon: 'user'
    }, {
        text: 'Logout',
        icon: 'runner'
    }];

    constructor() {}

    toggleMenu = () => {
        this.menuToggle.emit();
    }

    onShowLoginPopup = () => {
        this.showLoginPopup = true;
    }

    loginClick(args) {
        this.showLoginPopup = false;
        this.isUserAuthorized = true;
    }

    logoutClick() {
        this.isUserAuthorized = false;
    }
}

@NgModule({
    imports: [
        CommonModule,
        DxPopupModule,
        DxButtonModule,
        UserPanelModule,
        DxToolbarModule,
        LoginModule
    ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})
export class HeaderModule { }
