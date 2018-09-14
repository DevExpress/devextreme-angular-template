import { Component, NgModule, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTreeViewModule, DxTreeViewComponent } from 'devextreme-angular/ui/tree-view';

import { navigation } from '../../../app-navigation';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
    @ViewChild(DxTreeViewComponent)
    menu: DxTreeViewComponent;

    @Output() selectedItemChanged = new EventEmitter<string>();
    menuItems: any;

    private _compactMode = false;
    @Input()
    get compactMode() {
        return this._compactMode;
    }
    set compactMode(val) {
        this._compactMode = val;
        if (val && this.menu.instance) {
            this.menu.instance.collapseAll();
        }
    }

    constructor(private router: Router) {
        this.menuItems = navigation;

        router.events.subscribe(val => {
            if (val instanceof NavigationEnd && this.menu.instance) {
                this.menu.instance.selectItem(val.url);
            }
        });
    }

    onItemSelectionChanged(event) {
        const path = event.itemData.path;
        if (path) {
            this.selectedItemChanged.emit(event.itemData.text);
            this.router.navigate([path]);
        } else {
            const treeView = this.menu.instance;
            event.node.expanded ? treeView.collapseItem(event.itemData) : treeView.expandItem(event.itemData);
        }
    }
}

@NgModule({
    imports: [ CommonModule, DxTreeViewModule ],
    declarations: [ NavigationMenuComponent ],
    exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
