import { Component, NgModule, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DxTreeViewModule, DxTreeViewComponent } from 'devextreme-angular/ui/tree-view';

import * as events from 'devextreme/events';

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent implements AfterViewInit, OnDestroy {
  @ViewChild(DxTreeViewComponent)
  menu: DxTreeViewComponent;

  @Output()
  selectedItemChanged = new EventEmitter<string>();

  @Output()
  openMenu = new EventEmitter<any>();

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

  constructor(private elementRef: ElementRef) { }

  updateSelection(event) {
    const nodeClass = 'dx-treeview-node';
    const selectedClass = 'dx-state-selected';
    const leafNodeClass = 'dx-treeview-node-is-leaf';
    const element: HTMLElement = event.element;

    const rootNodes = element.querySelectorAll(`.${nodeClass}:not(.${leafNodeClass})`);
    Array.from(rootNodes).forEach(node => {
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

  onMenuInitialized(event) {
    event.component.option('deferRendering', false);
  }

  ngAfterViewInit() {
    events.on(this.elementRef.nativeElement, 'dxclick', (e) => {
      this.openMenu.next(e);
    });
  }

  ngOnDestroy() {
    events.off(this.elementRef.nativeElement, 'dxclick');
  }
}

@NgModule({
  imports: [ DxTreeViewModule ],
  declarations: [ SideNavigationMenuComponent ],
  exports: [ SideNavigationMenuComponent ]
})
export class SideNavigationMenuModule { }
