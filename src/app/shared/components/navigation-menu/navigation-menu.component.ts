import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { NavigationService, Navigation } from '../../../services/navigation.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styles: [`
        :host {
            display: block;
            height: 100%;
        }
    `],
    providers: [NavigationService]
})
export class NavigationMenuComponent {
    @Output() selectedItemChanged = new EventEmitter<string>();
    menuItems: Navigation[];

    constructor(private router: Router, navigatiomService: NavigationService) {
        this.menuItems = navigatiomService.getNavigation();
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
