import { Component, NgModule, Output, EventEmitter, ViewChild } from '@angular/core';
import { DxTreeViewModule, DxTreeViewComponent } from 'devextreme-angular/ui/tree-view';
import { navigation } from '../../../app-navigation';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styles: [`
        :host {
            display: block;
            height: 100%;
        }
    `]
})
export class NavigationMenuComponent {
    @ViewChild(DxTreeViewComponent)
    menu: DxTreeViewComponent;

    @Output() selectedItemChanged = new EventEmitter<string>();
    menuItems: any;

    constructor(private router: Router) {
        this.menuItems = navigation;

        router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                this.menu.instance.selectItem(val.url);
            }
        });
    }

    onItemSelectionChanged(event) {
        const path = event.itemData.path;
        if(path) {
            this.selectedItemChanged.emit(event.itemData.text);
            this.router.navigate([path]);
        }
    }
}

@NgModule({
    imports: [ DxTreeViewModule ],
    declarations: [ NavigationMenuComponent ],
    exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
