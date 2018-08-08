import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from '../login/login.component';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styles: [`
        .image-container {
            float: left;
            overflow: hidden;
            border-radius: 50%;
            margin-right: 10px;
            height: 20px;
        }
        .user-image {
            width: 20px;
        }
    `]
})

export class HeaderComponent {
    @Input() menuVisible = false;

    @Output() menuVisibleChange = new EventEmitter<boolean>();

    showLoginPopup = false;
    userLogin: any = null;
    isUserAuthorized = false;

    constructor() {}

    toggleMenu = () => {
        this.menuVisible = !this.menuVisible;
        this.menuVisibleChange.emit(this.menuVisible);
    }

    onShowLoginPopup = () => {
        this.showLoginPopup = true;
    }

    loginClick(args) {
        this.userLogin = args.login;
        this.showLoginPopup = false;
        this.isUserAuthorized = true;
    }
}

@NgModule({
    imports: [
        CommonModule,
        DxPopupModule,
        DxToolbarModule,
        LoginModule
    ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})
export class HeaderModule { }

