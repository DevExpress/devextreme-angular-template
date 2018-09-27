import { Component, NgModule, Output, Input, EventEmitter, ViewChild } from '@angular/core';
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

    updateSelection(event) {
        const nodeClass = 'dx-treeview-node';
        const selectedClass = 'dx-state-selected';
        const leafNodeClass = 'dx-treeview-node-is-leaf';
        const element: HTMLElement = event.element;

        const nodes = [].slice.call(element.querySelectorAll(`.${nodeClass}`));
        nodes.filter(node => {
            return !node.classList.contains(leafNodeClass);
        }).forEach(node => {
            node.classList.remove(selectedClass);
        });

        let selectedNode = element.querySelector(`.${nodeClass}.${selectedClass}`);
        while (selectedNode && selectedNode.parentElement) {
            if (selectedNode.classList.contains(nodeClass)) {
                selectedNode.classList.add(selectedClass);
            }

            selectedNode = selectedNode.parentElement;
        }
    }

    onItemClick(event) {
        this.selectedItemChanged.emit(event);
    }
}

@NgModule({
    imports: [ DxTreeViewModule ],
    declarations: [ NavigationMenuComponent ],
    exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
