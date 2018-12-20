import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services';
import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    @Output()
    menuToggle = new EventEmitter<boolean>();

    @Input()
    menuToggleEnabled = false;

    @Input()
    title: string;

    userMenuItems = [{
        text: 'Profile',
        icon: 'user'
    }, {
        text: 'Logout',
        icon: 'runner',
        onClick: () => {
            this.authService.logOut();
        }
    }];

    constructor(private authService: AuthService) { }

    toggleMenu = () => {
        this.menuToggle.emit();
    }
}

@NgModule({
    imports: [
        CommonModule,
        DxButtonModule,
        UserPanelModule,
        DxToolbarModule
    ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})
export class HeaderModule { }
