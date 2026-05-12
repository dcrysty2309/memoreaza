import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../ui/container/container.component';

@Component({
  selector: 'app-blog',
  imports: [ContainerComponent, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  private static truncateWithDots(text: string, maxChars: number) {
    const normalized = text.trim().replace(/\s+/g, ' ');
    const slice = normalized.slice(0, Math.max(0, maxChars)).trimEnd();
    const cutOnWord = slice.length < normalized.length ? slice.replace(/\s+\S*$/, '').trimEnd() : slice;
    return `${(cutOnWord || slice).trimEnd()}...`;
  }

  protected readonly posts = [
    {
      id: 'luceafarul',
      title: 'Luceafărul — Teme și Simboluri Explicate Simplu',
      excerpt:
        'Descoperă pe scurt temele, simbolurile și tablourile poemului, explicate clar și structurat pentru bac.',
      excerptShort: BlogComponent.truncateWithDots(
        'Descoperă pe scurt temele, simbolurile și tablourile poemului, explicate clar și structurat pentru bac.',
        160,
      ),
      thumbSrc: 'assets/blog-thumb-luceafarul.png',
      thumbAlt: 'Luceafărul — Teme și Simboluri Explicate Simplu',
    },
    {
      id: 'moara-cu-noroc',
      title: 'Moara cu Noroc — Analiză pe Înțelesul Tău, Pas cu Pas',
      excerpt:
        'Personaje, conflict, teme și structură epică: o sinteză rapidă care te ajută să înțelegi nuvela.',
      excerptShort: BlogComponent.truncateWithDots(
        'Personaje, conflict, teme și structură epică: o sinteză rapidă care te ajută să înțelegi nuvela.',
        160,
      ),
      thumbSrc: 'assets/blog-thumb-moara-cu-noroc.png',
      thumbAlt: 'Moara cu Noroc — Analiză pe Înțelesul Tău, Pas cu Pas',
    },
    {
      id: 'harap-alb',
      title: 'Povestea lui Harap-Alb — Personaje și Structură Clară',
      excerpt:
        'Roluri, etape ale drumului inițiatic și elemente de basm cult, explicate simplu cu exemple.',
      excerptShort: BlogComponent.truncateWithDots(
        'Roluri, etape ale drumului inițiatic și elemente de basm cult, explicate simplu cu exemple.',
        160,
      ),
      thumbSrc: 'assets/blog-thumb-harap-alb.png',
      thumbAlt: 'Povestea lui Harap-Alb — Personaje și Structură Clară',
    },
  ] as const;
}
