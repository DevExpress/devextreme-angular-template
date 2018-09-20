import { Component, NgModule, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTreeViewModule, DxTreeViewComponent } from 'devextreme-angular/ui/tree-view';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
    @ViewChild(DxTreeViewComponent)
    menu: DxTreeViewComponent;

    @Output()
    selectedItemChanged = new EventEmitter<string>();

    @Input()
    items: any[];

    @Input()
    set selectedItem(value: String) {
        if (this.menu.instance) {
            this.menu.instance.selectItem(value);
        }
    }

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

    constructor() { }

    onItemSelectionChanged(event) {
        this.selectedItemChanged.emit(event);
    }
}

@NgModule({
    imports: [ CommonModule, DxTreeViewModule ],
    declarations: [ NavigationMenuComponent ],
    exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
