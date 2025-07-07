import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer><ng-content></ng-content></footer>
  `,
  styleUrls: ['./footer.component.scss'],
  standalone: true
})

export class FooterComponent {

}
