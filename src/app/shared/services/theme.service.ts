import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
const themes = ['light', 'dark'] as const;
const themeClassNamePrefix = 'dx-swatch-';

type Theme = typeof themes[number];

function getNextTheme(theme?: Theme) {
  return (theme && themes[themes.indexOf(theme) + 1]) || themes[0];
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: Theme = getNextTheme();

  constructor(@Inject(DOCUMENT) private document: Document) {
    if (!this.document.body.className.includes(themeClassNamePrefix)) {
      this.document.body.classList.add(themeClassNamePrefix + this.currentTheme);
    }
  }

  isDark = new BehaviorSubject<boolean>(this.currentTheme === 'dark');

  switchTheme() {
    const currentTheme = this.currentTheme;
    const newTheme = getNextTheme(this.currentTheme);
    const isCurrentThemeDark = currentTheme === 'dark';

    this.document.body.classList.replace(
      themeClassNamePrefix + currentTheme,
      themeClassNamePrefix + newTheme
    );

    const additionalClassNamePrefix = themeClassNamePrefix + 'additional';
    const additionalClassNamePostfix = isCurrentThemeDark ? '-' + currentTheme : '';
    const additionalClassName = `${additionalClassNamePrefix}${additionalClassNamePostfix}`

    this.document.body
      .querySelector(`.${additionalClassName}`)?.classList
      .replace(additionalClassName, additionalClassNamePrefix + (isCurrentThemeDark ? '' : '-dark'));

    this.currentTheme = newTheme;
    this.isDark.next(this.currentTheme === 'dark');
  }
}
