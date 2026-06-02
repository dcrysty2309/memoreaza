import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest, filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ContainerComponent } from '../../../ui/container/container.component';
import { findLessonBySlugs } from '../../../data/lessons';
import type { Flashcard, LessonTab, QuizQuestion } from '../../../data/lessons';

@Component({
  selector: 'app-lesson-detail',
  imports: [ContainerComponent, RouterLink, AsyncPipe],
  templateUrl: './lesson-detail.component.html',
  styleUrl: './lesson-detail.component.scss',
})
export class LessonDetailComponent {
  private readonly route = inject(ActivatedRoute);

  protected activeTab: LessonTab = 'video';
  protected readonly quizAnswers = new Map<string, number>();
  protected readonly flippedCards = new Set<string>();

  protected readonly vm$ = combineLatest([this.route.paramMap, this.route.queryParamMap]).pipe(
    map(([params]) => {
      const topicSlug = params.get('topicSlug');
      const lessonSlug = params.get('lessonSlug');
      const found = findLessonBySlugs(topicSlug, lessonSlug);
      if (!found) return null;
      const { subject, grade, topic, lesson } = found;

      const progressDone = Math.max(0, lesson.order - 1);
      const progressTotal = topic.lessons.length;
      const progressPct = Math.max(0, Math.min(100, Math.round((progressDone / progressTotal) * 100)));

      const nextLesson =
        topic.lessons.find((item) => item.order === lesson.order + 1) ?? topic.lessons[topic.lessons.length - 1];

      return {
        subject,
        grade,
        topic,
        lesson,
        quiz: lesson.quiz ?? ([] as readonly QuizQuestion[]),
        flashcards: lesson.flashcards ?? ([] as readonly Flashcard[]),
        progressDone,
        progressTotal,
        progressPct,
        nextLesson,
      };
    }),
  );

  constructor() {
    this.route.paramMap
      .pipe(
        map((p) => `${p.get('topicSlug') ?? ''}/${p.get('lessonSlug') ?? ''}`),
        filter(Boolean),
      )
      .subscribe(() => {
        this.activeTab = 'video';
        this.quizAnswers.clear();
        this.flippedCards.clear();
      });
  }

  protected setTab(tab: LessonTab) {
    this.activeTab = tab;
  }

  protected answerQuestion(questionId: string, optionIndex: number) {
    if (this.quizAnswers.has(questionId)) return;
    this.quizAnswers.set(questionId, optionIndex);
  }

  protected resetQuiz() {
    this.quizAnswers.clear();
  }

  protected quizScore(quiz: readonly QuizQuestion[]) {
    if (!quiz.length) return { answered: 0, total: 0, correct: 0 };
    const total = quiz.length;
    let answered = 0;
    let correct = 0;
    for (const q of quiz) {
      if (!this.quizAnswers.has(q.id)) continue;
      answered += 1;
      if (this.quizAnswers.get(q.id) === q.correctIndex) correct += 1;
    }
    return { answered, total, correct };
  }

  protected toggleCard(cardId: string) {
    if (this.flippedCards.has(cardId)) this.flippedCards.delete(cardId);
    else this.flippedCards.add(cardId);
  }
}
