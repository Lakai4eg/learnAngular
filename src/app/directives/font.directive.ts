import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontDirective implements OnInit{
  @Input('appFontSize') fontSize: string = '16'
  @HostBinding('style.cursor') cursor: string = 'default'
  constructor(private el: ElementRef, private r: Renderer2) {
  }

  ngOnInit() {
    this.r.setStyle(this.el.nativeElement, 'font-size', `${this.fontSize}px`)
  }


  @HostListener('mouseover', ['$event.target']) onEnter(){
    this.r.setStyle(this.el.nativeElement, 'color', '#cccccc')
    this.cursor = 'pointer'
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(){
    this.r.setStyle(this.el.nativeElement, 'color', 'unset')
  }




}
