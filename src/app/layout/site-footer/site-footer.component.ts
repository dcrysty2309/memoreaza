import { Component } from '@angular/core';
import { ContainerComponent } from '../../ui/container/container.component';

@Component({
  selector: 'app-site-footer',
  imports: [ContainerComponent],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  protected readonly year = new Date().getFullYear();
}

