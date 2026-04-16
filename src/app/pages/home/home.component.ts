import { Component } from '@angular/core';
import { ContainerComponent } from '../../ui/container/container.component';

@Component({
  selector: 'app-home',
  imports: [ContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

