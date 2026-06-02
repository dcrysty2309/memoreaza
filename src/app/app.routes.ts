import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { LessonDetailComponent } from './pages/lessons/lesson-detail/lesson-detail.component';
import { StaticPageComponent } from './pages/static/static-page.component';
import { LessonTopicComponent } from './pages/lessons/topic/lesson-topic.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'lectii', component: LessonsComponent },
  { path: 'lectii/:topicSlug', component: LessonTopicComponent },
  { path: 'lectii/:topicSlug/:lessonSlug', component: LessonDetailComponent },
  {
    path: 'cum-functioneaza',
    component: StaticPageComponent,
    data: {
      title: 'Cum funcționează',
      subtitle: 'Pagină demo (designul complet va fi adăugat ulterior).',
    },
  },
  {
    path: 'aplicatie',
    loadComponent: () => import('./pages/app/app-page.component').then((m) => m.AppPageComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'contact',
    component: StaticPageComponent,
    data: {
      title: 'Contact',
      subtitle: 'Pagină demo (designul complet va fi adăugat ulterior).',
    },
  },
  { path: '**', redirectTo: '' },
];
