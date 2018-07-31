import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DxValidationGroupModule } from 'devextreme-angular/ui/validation-group';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    login = '';
    password = '';

    @Output()
    public loginClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    onLoginClick(args) {
        if (!args.validationGroup.validate().isValid) {
            return;
        }

        this.loginClick.next({
            'password': this.password,
            'login': this.login
        });
    }
}

@NgModule({
    imports: [
        CommonModule,
        DxButtonModule,
        DxTextBoxModule,
        DxValidatorModule,
        DxValidationGroupModule
    ],
    declarations: [ LoginComponent ],
    exports: [ LoginComponent ]
})
export class LoginModule { }
