import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<ng-container [ngTemplateOutlet]="template"></ng-container>`
})
export default class ButtonComponent {
  template?: TemplateRef<any>;

  constructor() {
    console.log(this.template?.elementRef);
  }
}
