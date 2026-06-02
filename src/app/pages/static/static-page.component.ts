import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContainerComponent } from '../../ui/container/container.component';

@Component({
  selector: 'app-static-page',
  imports: [ContainerComponent],
  templateUrl: './static-page.component.html',
  styleUrl: './static-page.component.scss',
})
export class StaticPageComponent {
  protected title = '';
  protected subtitle: string | null = null;

  constructor(route: ActivatedRoute) {
    const data = route.snapshot.data as { title?: string; subtitle?: string };
    this.title = data.title ?? '';
    this.subtitle = data.subtitle ?? null;
  }
}
