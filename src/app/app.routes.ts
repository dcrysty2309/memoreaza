import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'aplicatie',
    loadComponent: () => import('./pages/app/app-page.component').then((m) => m.AppPageComponent),
  },
  { path: '**', redirectTo: '' },
];
