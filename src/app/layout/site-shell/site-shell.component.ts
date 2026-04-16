import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooterComponent } from '../site-footer/site-footer.component';
import { SiteHeaderComponent } from '../site-header/site-header.component';
import { SiteTopbarComponent } from '../site-topbar/site-topbar.component';

@Component({
  selector: 'app-site-shell',
  imports: [RouterOutlet, SiteTopbarComponent, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './site-shell.component.html',
  styleUrl: './site-shell.component.scss',
})
export class SiteShellComponent {}
