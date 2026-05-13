import { ApplicationRef, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SiteFooterComponent } from '../site-footer/site-footer.component';
import { SiteHeaderComponent } from '../site-header/site-header.component';
import { SiteTopbarComponent } from '../site-topbar/site-topbar.component';
import { combineLatest, filter, take } from 'rxjs';

@Component({
  selector: 'app-site-shell',
  imports: [RouterOutlet, SiteTopbarComponent, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './site-shell.component.html',
  styleUrl: './site-shell.component.scss',
})
export class SiteShellComponent {
  protected preloaderVisible = true;
  protected preloaderHiding = false;

  private readonly appRef = inject(ApplicationRef);
  private readonly router = inject(Router);

  constructor() {
    const stable$ = this.appRef.isStable.pipe(
      filter(Boolean),
      take(1),
    );

    const navDone$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      take(1),
    );

    combineLatest([stable$, navDone$]).subscribe(() => this.hidePreloader());
  }

  private hidePreloader() {
    if (!this.preloaderVisible || this.preloaderHiding) return;
    this.preloaderHiding = true;
    window.setTimeout(() => {
      this.preloaderVisible = false;
    }, 220);
  }
}
