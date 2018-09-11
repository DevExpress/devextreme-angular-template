import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { navigation } from '../../../app-navigation';
import { Router } from '@angular/router';

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
    @Output() selectedItemChanged = new EventEmitter<string>();
    menuItems: any;

    constructor(private router: Router) {
        this.menuItems = navigation;
    }

  onItemSelectionChanged(event) {
      this.selectedItemChanged.emit(event.itemData.text);
      this.router.navigate([event.itemData.path]);
  }
}

@NgModule({
    imports: [ DxTreeViewModule ],
    declarations: [ NavigationMenuComponent ],
    exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
