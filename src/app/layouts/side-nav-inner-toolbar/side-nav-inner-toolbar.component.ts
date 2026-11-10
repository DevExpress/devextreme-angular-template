import { Component, OnInit, Input, ViewChild, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';
import { DxDrawerModule, DxDrawerTypes } from 'devextreme-angular/ui/drawer';
import { DxScrollViewModule, DxScrollViewComponent } from 'devextreme-angular/ui/scroll-view';
import { DxToolbarModule, DxToolbarTypes } from 'devextreme-angular/ui/toolbar';

import { SideNavigationMenuComponent, HeaderComponent } from '../../shared/components';
import { ScreenService } from '../../shared/services';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-side-nav-inner-toolbar',
  templateUrl: './side-nav-inner-toolbar.component.html',
  styleUrls: ['./side-nav-inner-toolbar.component.scss'],
  standalone: true,
  imports: [
    SideNavigationMenuComponent,
    DxDrawerModule,
    HeaderComponent,
    DxToolbarModule,
    DxScrollViewModule,
    CommonModule,
  ]
})
export class SideNavInnerToolbarComponent implements OnInit {
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

  toggleMenu = (e: DxToolbarTypes.ItemClickEvent) => {
    this.menuOpened.update((opened) => !opened);
    e.event?.stopPropagation();
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
