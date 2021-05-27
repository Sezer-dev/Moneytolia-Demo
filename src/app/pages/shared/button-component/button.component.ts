import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() callToAction: string;
  @Output() onClick:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {}

  clickEvent(event?:MouseEvent):void {
    this.onClick.emit(event);
  }
}
