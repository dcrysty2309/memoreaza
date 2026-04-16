import { Directive, HostBinding, Input } from '@angular/core';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'cta';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';

  @HostBinding('class')
  protected get hostClass(): string {
    const sizeClass = this.size === 'md' ? '' : ` btn--${this.size}`;
    return `btn btn--${this.variant}${sizeClass}`;
  }
}
