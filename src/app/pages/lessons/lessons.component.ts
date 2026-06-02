import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject, SUBJECTS } from '../../data/lessons';
import { ContainerComponent } from '../../ui/container/container.component';

@Component({
  selector: 'app-lessons',
  imports: [ContainerComponent, RouterLink],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss',
})
export class LessonsComponent {
  protected readonly subjects = SUBJECTS;
  protected selectedSubjectId = this.subjects.find((s) => !s.comingSoon)?.id ?? this.subjects[0]?.id ?? '';
  protected selectedGradeId = this.activeSubject?.grades.find((g) => !g.comingSoon)?.id ?? this.activeSubject?.grades[0]?.id ?? '';

  protected get activeSubject(): Subject | null {
    return this.subjects.find((s) => s.id === this.selectedSubjectId) ?? null;
  }

  protected get activeGrade() {
    const subject = this.activeSubject;
    if (!subject) return null;
    return subject.grades.find((g) => g.id === this.selectedGradeId) ?? null;
  }

  protected selectSubject(subject: Subject) {
    if (subject.comingSoon) return;
    this.selectedSubjectId = subject.id;
    this.selectedGradeId = subject.grades.find((g) => !g.comingSoon)?.id ?? subject.grades[0]?.id ?? '';
  }

  protected selectGrade(gradeId: string) {
    const subject = this.activeSubject;
    if (!subject) return;
    const grade = subject.grades.find((g) => g.id === gradeId);
    if (!grade || grade.comingSoon) return;
    this.selectedGradeId = gradeId;
  }
}
