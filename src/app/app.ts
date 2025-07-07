import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { DxHttpModule } from 'devextreme-angular/http';
import { FooterComponent } from './shared/components';
import { UnauthenticatedContentComponent } from './unauthenticated-content';
import { SideNavOuterToolbarComponent as SideNavToolbarComponent } from './layouts';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    DxHttpModule,
    SideNavToolbarComponent,
    FooterComponent,
    UnauthenticatedContentComponent,
  ],
  providers: []
})
export class App {
  @HostBinding('class') get getClass() {
    const sizeClassName = Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
    return `${sizeClassName} app` ;
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
