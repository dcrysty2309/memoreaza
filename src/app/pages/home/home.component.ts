import { Component } from '@angular/core';
import { ContainerComponent } from '../../ui/container/container.component';
import { ButtonDirective } from '../../ui/button/button.directive';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type BlogPostPreview = {
  id: string;
  title: string;
  excerpt: string;
  excerptShort: string;
  tag: string;
  thumbSrc: string;
  thumbAlt: string;
};

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, ButtonDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private static truncateWithDots(text: string, maxChars: number) {
    const normalized = text.trim().replace(/\s+/g, ' ');
    const slice = normalized.slice(0, Math.max(0, maxChars)).trimEnd();
    const cutOnWord = slice.length < normalized.length ? slice.replace(/\s+\S*$/, '').trimEnd() : slice;
    return `${(cutOnWord || slice).trimEnd()}...`;
  }

  protected readonly blogPosts: readonly BlogPostPreview[] = [
    {
      id: 'luceafarul',
      title: 'Luceafărul — Teme și Simboluri Explicate Simplu',
      excerpt:
        'Descoperă pe scurt temele, simbolurile și tablourile poemului, explicate clar și structurat pentru bac.',
      excerptShort: HomeComponent.truncateWithDots(
        'Descoperă pe scurt temele, simbolurile și tablourile poemului, explicate clar și structurat pentru bac.',
        140,
      ),
      tag: 'Literatură',
      thumbSrc: 'assets/blog-thumb-luceafarul.png',
      thumbAlt: 'Luceafărul — Teme și Simboluri Explicate Simplu',
    },
    {
      id: 'moara-cu-noroc',
      title: 'Moara cu Noroc — Analiză pe Înțelesul Tău, Pas cu Pas',
      excerpt:
        'Personaje, conflict, teme și structură epică: o sinteză rapidă care te ajută să înțelegi nuvela.',
      excerptShort: HomeComponent.truncateWithDots(
        'Personaje, conflict, teme și structură epică: o sinteză rapidă care te ajută să înțelegi nuvela.',
        140,
      ),
      tag: 'Literatură',
      thumbSrc: 'assets/blog-thumb-moara-cu-noroc.png',
      thumbAlt: 'Moara cu Noroc — Analiză pe Înțelesul Tău, Pas cu Pas',
    },
    {
      id: 'harap-alb',
      title: 'Povestea lui Harap-Alb — Personaje și Structură Clară',
      excerpt:
        'Roluri, etape ale drumului inițiatic și elemente de basm cult, explicate simplu cu exemple.',
      excerptShort: HomeComponent.truncateWithDots(
        'Roluri, etape ale drumului inițiatic și elemente de basm cult, explicate simplu cu exemple.',
        140,
      ),
      tag: 'Literatură',
      thumbSrc: 'assets/blog-thumb-harap-alb.png',
      thumbAlt: 'Povestea lui Harap-Alb — Personaje și Structură Clară',
    },
  ];

  protected readonly faqItems: readonly FaqItem[] = [
    {
      id: 'free',
      question: 'Pot folosi Memorează gratuit?',
      answer:
        'Da. Poți începe gratuit și testa demo-ul. Unele funcții avansate pot fi disponibile ulterior într-un plan premium.',
    },
    {
      id: 'flashcards',
      question: 'Cum funcționează flashcardurile?',
      answer:
        'Flashcardurile te ajută să fixezi ideile-cheie prin recapitulare activă. Repeți rapid conceptele importante și îți consolidezi memoria pe termen lung.',
    },
    {
      id: 'lessons',
      question: 'Ce conține o lecție?',
      answer:
        'Lecțiile sunt structurate clar: explicații pe înțelesul tău, exemple, idei esențiale și exerciții/quizuri pentru verificare rapidă.',
    },
    {
      id: 'quizzes',
      question: 'Quizurile sunt greu de făcut?',
      answer:
        'Nu. Întrebările sunt scurte și clare, iar feedback-ul e imediat, ca să știi exact ce ai înțeles și ce mai ai de repetat.',
    },
    {
      id: 'devices',
      question: 'Merge pe telefon și pe laptop?',
      answer:
        'Da. Interfața este gândită să funcționeze bine atât pe mobil, cât și pe desktop, cu layout adaptiv.',
    },
    {
      id: 'content',
      question: 'Pentru ce materii este platforma?',
      answer:
        'Începem cu literatura (opere pentru bac), iar conținutul se extinde treptat cu lecții și seturi de flashcarduri noi.',
    },
  ];

  protected openFaqId: string | null = null;

  protected toggleFaq(id: string) {
    this.openFaqId = this.openFaqId === id ? null : id;
  }
}
