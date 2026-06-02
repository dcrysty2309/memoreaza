export type LessonTab = 'video' | 'quiz' | 'flashcarduri';

export type QuizQuestion = {
  id: string;
  question: string;
  options: readonly string[];
  correctIndex: number;
};

export type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export type SubLesson = {
  id: string;
  slug: string;
  title: string;
  order: number;
  videoLabel: string;
  contentTitle: string;
  paragraphs: readonly string[];
  bulletsTitle: string;
  bullets: readonly string[];
  symbolsTitle: string;
  symbols: readonly string[];
  quiz?: readonly QuizQuestion[];
  flashcards?: readonly Flashcard[];
};

export type Topic = {
  id: string;
  slug: string;
  title: string;
  comingSoon?: boolean;
  lessons: readonly SubLesson[];
};

export type Grade = {
  id: string;
  title: string;
  comingSoon?: boolean;
  topics: readonly Topic[];
};

export type Subject = {
  id: string;
  title: string;
  comingSoon?: boolean;
  grades: readonly Grade[];
};

export const SUBJECTS: readonly Subject[] = [
  {
    id: 'romana',
    title: 'Limba română',
    grades: [
      {
        id: 'clasa-10',
        title: 'Clasa a X-a',
        topics: [
          {
            id: 'topic-luceafarul',
            slug: 'luceafarul',
            title: 'Luceafărul',
            lessons: [
              {
                id: 'luceafarul-1',
                slug: 'teme-si-simboluri',
                title: 'Luceafărul — Teme și Simboluri',
                order: 1,
                videoLabel: 'Video',
                contentTitle: 'Despre această lecție',
                paragraphs: [
                  'În această lecție vei explora temele și simbolurile principale din poemul „Luceafărul” de Mihai Eminescu, una dintre cele mai importante opere ale literaturii române.',
                  'Vei înțelege cum se construiesc contrastele dintre lumea ideală și cea umană, precum și semnificația relației dintre Hyperion și Cătălina. Lecția explică pe înțelesul tău concepte precum aspirația spre absolut, iubirea imposibilă și limitele condiției umane.',
                  'Prin exemple clare și explicații structurate, vei putea identifica simbolurile esențiale și rolul lor în transmiterea mesajului poetic.',
                ],
                bulletsTitle: 'Puncte cheie',
                bullets: [
                  'Tema iubirii imposibile dintre o ființă superioară și una umană',
                  'Contrastul dintre lumea ideală și cea reală',
                  'Trecerea timpului și condiția efemeră a omului',
                ],
                symbolsTitle: 'Simboluri Cheie',
                symbols: [
                  'Luceafărul — idealul, absolutul',
                  'Cătălina — lumea umană, limitată',
                  'Noaptea / cerul — infinitul și cunoașterea',
                  'Marea — spațiul dintre lumi',
                ],
                quiz: [
                  {
                    id: 'q1',
                    question: 'Ce simbolizează Luceafărul (Hyperion) în poem?',
                    options: ['Lumea umană și limitele ei', 'Idealul și aspirația spre absolut', 'Trecerea timpului'],
                    correctIndex: 1,
                  },
                  {
                    id: 'q2',
                    question: 'Care este contrastul central prezentat în poem?',
                    options: ['Zi/noapte', 'Ideal/real', 'Oraș/sat'],
                    correctIndex: 1,
                  },
                  {
                    id: 'q3',
                    question: 'Cătălina reprezintă cel mai bine…',
                    options: ['Infinitul și cunoașterea', 'Lumea umană, limitată', 'Spațiul dintre lumi'],
                    correctIndex: 1,
                  },
                ],
                flashcards: [
                  { id: 'f1', front: 'Luceafărul', back: 'Idealul, absolutul; aspirația spre depășirea limitelor.' },
                  { id: 'f2', front: 'Cătălina', back: 'Lumea umană: concretă, limitată, orientată spre imediat.' },
                  { id: 'f3', front: 'Noaptea / Cerul', back: 'Infinitul și cunoașterea; spațiul cosmic.' },
                  { id: 'f4', front: 'Tema iubirii', back: 'Iubire imposibilă între superior (Hyperion) și uman.' },
                ],
              },
              {
                id: 'luceafarul-2',
                slug: 'structura-poemului',
                title: 'Structura poemului (demo)',
                order: 2,
                videoLabel: 'Video',
                contentTitle: 'Despre această lecție',
                paragraphs: ['Aceasta este o lecție demo. Conținutul complet va fi adăugat ulterior.'],
                bulletsTitle: 'Puncte cheie',
                bullets: ['Structură pe tablouri', 'Ritm și muzicalitate', 'Construcția personajelor'],
                symbolsTitle: 'Simboluri Cheie',
                symbols: ['—'],
              },
            ],
          },
          {
            id: 'topic-moara',
            slug: 'moara-cu-noroc',
            title: 'Moara cu noroc',
            comingSoon: true,
            lessons: [],
          },
        ],
      },
      { id: 'clasa-11', title: 'Clasa a XI-a', comingSoon: true, topics: [] },
      { id: 'clasa-12', title: 'Clasa a XII-a', comingSoon: true, topics: [] },
    ],
  },
  { id: 'matematica', title: 'Matematică', comingSoon: true, grades: [] },
  { id: 'istorie', title: 'Istorie', comingSoon: true, grades: [] },
  { id: 'biologie', title: 'Biologie', comingSoon: true, grades: [] },
] as const;

export function findSubject(subjectId: string | null | undefined) {
  if (!subjectId) return null;
  return SUBJECTS.find((subject) => subject.id === subjectId) ?? null;
}

export function findGrade(subjectId: string | null | undefined, gradeId: string | null | undefined) {
  const subject = findSubject(subjectId);
  if (!subject || !gradeId) return null;
  return subject.grades.find((grade) => grade.id === gradeId) ?? null;
}

export function findTopicBySlug(topicSlug: string | null | undefined) {
  if (!topicSlug) return null;
  for (const subject of SUBJECTS) {
    for (const grade of subject.grades) {
      const topic = grade.topics?.find((t) => t.slug === topicSlug);
      if (topic) return { subject, grade, topic };
    }
  }
  return null;
}

export function findLessonBySlugs(topicSlug: string | null | undefined, lessonSlug: string | null | undefined) {
  if (!topicSlug || !lessonSlug) return null;
  const topicFound = findTopicBySlug(topicSlug);
  if (!topicFound) return null;
  const lesson = topicFound.topic.lessons.find((l) => l.slug === lessonSlug) ?? null;
  if (!lesson) return null;
  return { ...topicFound, lesson };
}
