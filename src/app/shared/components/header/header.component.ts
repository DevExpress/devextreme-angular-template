import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { LoginFormModule } from '../login-form/login-form.component';
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
    userMenuItems = [{
        text: 'Profile',
        icon: 'user'
    }, {
        text: 'Logout',
        icon: 'runner'
    }];

    constructor(private router: Router) {}

    toggleMenu = () => {
        this.menuToggle.emit();
    }

    onShowLoginPopup = () => {
        this.showLoginPopup = true;
    }

    onLoginClick(args) {
        this.showLoginPopup = false;
        this.isUserAuthorized = true;
    }

    onUserMenuItemClick(item) {
        if (item === this.userMenuItems[1]) {
            this.isUserAuthorized = false;
        } else if (item === this.userMenuItems[0]) {
            this.router.navigate(['/profile']);
        }
    }
}

@NgModule({
    imports: [
        CommonModule,
        DxPopupModule,
        DxButtonModule,
        UserPanelModule,
        DxToolbarModule,
        LoginFormModule
    ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})
export class HeaderModule { }
