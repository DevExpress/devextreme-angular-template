import { Component, OnInit, Input, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';


import { DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';
import { DxDrawerModule, DxDrawerTypes } from 'devextreme-angular/ui/drawer';
import { DxScrollViewModule, DxScrollViewComponent } from 'devextreme-angular/ui/scroll-view';

import { SideNavigationMenuComponent, HeaderComponent } from '../../shared/components';
import { ScreenService, ThemeService } from '../../shared/services';

@Component({
  selector: 'app-side-nav-outer-toolbar',
  templateUrl: './side-nav-outer-toolbar.component.html',
  styleUrls: ['./side-nav-outer-toolbar.component.scss'],
  standalone: true,
  imports: [ CommonModule, SideNavigationMenuComponent, DxDrawerModule, HeaderComponent, DxScrollViewModule ],
})
export class SideNavOuterToolbarComponent implements OnInit {
  @ViewChild(DxScrollViewComponent, { static: true }) scrollView!: DxScrollViewComponent;
  selectedRoute = signal('');

  menuOpened = signal(false);
  temporaryMenuOpened = signal(false);

  @Input()
  title!: string;

  menuMode = signal<DxDrawerTypes.OpenedStateMode>('shrink');
  menuRevealMode = signal<DxDrawerTypes.RevealMode>('expand');
  minMenuSize = signal(0);
  shaderEnabled = signal(false);
  swatchClassName = signal('dx-swatch-additional');

  constructor(protected themeService: ThemeService, private screen: ScreenService, private router: Router) {
    themeService.isDark.subscribe((isDark) => {
      this.swatchClassName.set('dx-swatch-additional' + (isDark ? '-dark' : ''));
    })
  }

  ngOnInit() {
    this.menuOpened.set(this.screen.sizes['screen-large']);

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.selectedRoute.set(val.urlAfterRedirects.split('?')[0]);
      }
    });

    this.screen.changed.subscribe(() => this.updateDrawer());

    this.updateDrawer();
  }

  updateDrawer() {
    const isXSmall = this.screen.sizes['screen-x-small'];
    const isLarge = this.screen.sizes['screen-large'];

    this.menuMode.set(isLarge ? 'shrink' : 'overlap');
    this.menuRevealMode.set(isXSmall ? 'slide' : 'expand');
    this.minMenuSize.set(isXSmall ? 0 : 60);
    this.shaderEnabled.set(!isLarge);
  }

  get hideMenuAfterNavigation() {
    return this.menuMode() === 'overlap' || this.temporaryMenuOpened();
  }

  get showMenuAfterClick() {
    return !this.menuOpened();
  }

  navigationChanged(event: DxTreeViewTypes.ItemClickEvent) {
    const path = (event.itemData as any).path;
    const pointerEvent = event.event;

    if (path && this.menuOpened()) {
      if (event.node?.selected) {
        pointerEvent?.preventDefault();
      } else {
        this.router.navigate([path]);
        this.scrollView.instance.scrollTo(0);
      }

      if (this.hideMenuAfterNavigation) {
        this.temporaryMenuOpened.set(false);
        this.menuOpened.set(false);
        pointerEvent?.stopPropagation();
      }
    } else {
      pointerEvent?.preventDefault();
    }
  }

  navigationClick() {
    if (this.showMenuAfterClick) {
      this.temporaryMenuOpened.set(true);
      this.menuOpened.set(true);
    }
  }
}
