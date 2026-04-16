import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: '<div class="container"><ng-content /></div>',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {}

