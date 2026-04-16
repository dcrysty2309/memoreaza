import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../ui/container/container.component';

@Component({
  selector: 'app-site-topbar',
  imports: [RouterLink, ContainerComponent],
  templateUrl: './site-topbar.component.html',
  styleUrl: './site-topbar.component.scss',
})
export class SiteTopbarComponent {}

