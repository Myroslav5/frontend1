import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addHighlight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeHighlight();
  }

  private addHighlight() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 10px 20px rgba(0,0,0,0.2)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', '0.3s');
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '10');
  }

  private removeHighlight() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '1');
  }
}