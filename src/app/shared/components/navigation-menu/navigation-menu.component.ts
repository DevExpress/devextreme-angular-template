import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styles: [`
        :host {
            display: block;
            background-color: lightgray;
            height: 100%;
        }
    `]
})
export class NavigationMenuComponent {
    @Output() selectedItemChanged = new EventEmitter<string>();

    menuItems = [{
        text: 'Home',
        expanded: true,
        icon: 'home',
        items: [{
            text: 'Profile',
            path: 'profile'
        }, {
            text: 'Settings',
            path: 'settings'
        }]
    }, {
        text: 'About',
        icon: 'info',
        path: 'about'
    }
  ];

  constructor(private router: Router) { }

  onItemSelectionChanged(event) {
      this.selectedItemChanged.emit(event.itemData.text);
      this.router.navigate([event.itemData.path]);
  }
}

@NgModule({
    imports: [ DxTreeViewModule, DxToolbarModule ],
    declarations: [ NavigationMenuComponent ],
    exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
