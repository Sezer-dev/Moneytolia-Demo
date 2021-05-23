import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() clickCallback: Function;
  @Input() callToAction: string;
  @Output() click = new EventEmitter<MouseEvent>();

  constructor() {}

  onClick(event:MouseEvent) {
    this.click.emit(event);
  }
}
