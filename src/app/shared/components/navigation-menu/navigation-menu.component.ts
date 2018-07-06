import { Component, NgModule, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { Router } from '@angular/router';

@Component({
    selector: 'navigation-menu',
    templateUrl: './navigation-menu.component.html'
})
export class NavigationMenuComponent implements OnInit {
    @Output() clickOnMenuButton = new EventEmitter<boolean>();
    @Output() selectedItemsChanged = new EventEmitter<string>();
    @Input() navigationMenuOpened: boolean;
    menuItems = [{ 
        text: "Home",
        expanded: true,
        icon: "home",
        items: [{
            text: "Profile",
            path: "profile"
        }, {
            text: "Settings",
            path: "settings"
        }]
    }, {
        text: "About",
        icon: "info",
        path: "about"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  showMenu = () => {
      this.clickOnMenuButton.emit(this.navigationMenuOpened);
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
