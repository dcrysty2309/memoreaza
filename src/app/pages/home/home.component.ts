import { Component } from '@angular/core';
import { ContainerComponent } from '../../ui/container/container.component';
import { ButtonDirective } from '../../ui/button/button.directive';

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, ButtonDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
