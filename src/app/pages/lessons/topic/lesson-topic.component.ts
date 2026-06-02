import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';
import { ContainerComponent } from '../../../ui/container/container.component';
import { findTopicBySlug } from '../../../data/lessons';

@Component({
  selector: 'app-lesson-topic',
  imports: [ContainerComponent, RouterLink, AsyncPipe],
  templateUrl: './lesson-topic.component.html',
  styleUrl: './lesson-topic.component.scss',
})
export class LessonTopicComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly vm$ = this.route.paramMap.pipe(
    map((params) => {
      const topicSlug = params.get('topicSlug');
      const found = findTopicBySlug(topicSlug);
      if (!found) return null;
      const { subject, grade, topic } = found;
      return { subject, grade, topic };
    }),
  );
}

