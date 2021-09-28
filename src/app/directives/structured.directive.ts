import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appStructured]'
})
export class StructuredDirective {
  @Input('appStructured') set ifNot(condition: boolean) {
    if (!condition) {
      // Показать элементы
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      // Скрыть
      this.viewContainer.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }
}
