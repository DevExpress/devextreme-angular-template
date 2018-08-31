import { Injectable } from '@angular/core';

export class Navigation {
  text: string;
  expanded?: boolean;
  icon?: string;
  path?: string;
  items?: any;
}

let navigationData: Navigation[] = [
  {
    "text": "Home",
    "expanded": true,
    "icon": "home",
    "items": [
      {
        "text": "Profile",
        "path": "profile"
      },
      {
        "text": "Settings",
        "path": "settings"
      }
    ]
  },
  {
    "text": "About",
    "icon": "info",
    "path": "about"
  }
]

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  getNavigationData() {
    return navigationData;
  }
}
