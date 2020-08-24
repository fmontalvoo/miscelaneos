// Para crear esta directiva:
// ng g d directives/resaltado

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") color: string;

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') mouseOver() {
    this.resaltar(this.color || 'black');
    this.element.nativeElement.style.color = "white";
  }

  @HostListener('mouseleave') mouseOut() {
    this.resaltar(null);
    this.element.nativeElement.style.color = null;
  }

  private resaltar(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
