import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ContainerComponent } from '../../ui/container/container.component';
import { ButtonDirective } from '../../ui/button/button.directive';
import { filter } from 'rxjs';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, ContainerComponent, ButtonDirective],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  mobileOpen = false;
  protected isHome = true;

  constructor(router: Router) {
    this.isHome = router.url === '/' || router.url === '';
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).urlAfterRedirects ?? '';
        this.isHome = url === '/' || url === '';
        if (!this.isHome) this.mobileOpen = false;
      });
  }

  toggleMobileMenu() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobileMenu() {
    this.mobileOpen = false;
  }
}
