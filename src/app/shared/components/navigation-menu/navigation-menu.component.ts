import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { NavigationService, Navigation } from '../../../services/navigation/navigation.service';
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
    `],
    providers: [NavigationService]
})
export class NavigationMenuComponent {
    @Output() selectedItemsChanged = new EventEmitter<string>();

    menuItems: Navigation[];

  constructor(private router: Router, navigationService: NavigationService) {
      this.menuItems = navigationService.getNavigationData();
  }

  onItemSelectionChanged(event) {
      this.selectedItemsChanged.emit(event.itemData.text);
      this.router.navigate([event.itemData.path]);
  }
}

@NgModule({
    imports: [ DxTreeViewModule, DxToolbarModule ],
    declarations: [ NavigationMenuComponent ],
    exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
