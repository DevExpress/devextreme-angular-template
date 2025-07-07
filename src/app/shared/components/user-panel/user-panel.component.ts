import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxListModule } from 'devextreme-angular/ui/list';
import { DxDropDownButtonModule } from 'devextreme-angular/ui/drop-down-button';
import { DxContextMenuModule } from 'devextreme-angular/ui/context-menu';

@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  standalone: true,
  imports: [
    DxListModule,
    DxContextMenuModule,
    DxDropDownButtonModule,
    CommonModule
  ]
})
export class UserPanelComponent {
  @Input()
  menuItems: any;

  @Input()
  menuMode = 'context';
}
