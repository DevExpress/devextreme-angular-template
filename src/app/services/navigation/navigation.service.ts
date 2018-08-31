import { Injectable } from '@angular/core';

let navigationData = [
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
