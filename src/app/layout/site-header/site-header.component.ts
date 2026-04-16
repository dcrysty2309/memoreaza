import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../ui/container/container.component';
import { ButtonDirective } from '../../ui/button/button.directive';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, ContainerComponent, ButtonDirective],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {}
