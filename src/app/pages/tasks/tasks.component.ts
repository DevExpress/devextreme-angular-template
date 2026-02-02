import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { CustomStore } from 'devextreme-angular/common/data';

@Component({
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.scss'],
  standalone: true,
  imports: [DxDataGridModule]
})

export class TasksComponent {
  dataSource: any;

  constructor() {
    this.dataSource = {
      store: new CustomStore({
        key: 'id',
        async load() {
          try {
            const response = await fetch(`https://js.devexpress.com/Demos/RwaService/api/Employees/AllTasks`);

            const result = await response.json();

            return {
              data: result,
            };
          } catch (err) {
            throw new Error('Data Loading Error');
          }
        },
      }),
    };
  }
}
