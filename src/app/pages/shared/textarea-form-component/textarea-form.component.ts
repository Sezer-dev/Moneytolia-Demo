import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'textarea-form-component',
  templateUrl: './textarea-form.component.html',
  styleUrls: ['./textarea-form.component.css'],
})
export class TextareaFormComponent {
  @Input() inputValue: string;
  @Input() textareaValue: string;
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() textareaValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() buttonClickCallback: EventEmitter<Event> = new EventEmitter<Event>();
  @Input() buttonCallToAction: string;

  onInputChange(newValue: string) {
    this.inputValue = newValue;
    this.inputValueChange.emit(newValue);
  }
  onTextareaChange(newValue: string) {
    this.textareaValue = newValue;
    this.textareaValueChange.emit(newValue);
  }
  clickEvent(event?: Event) {
    this.buttonClickCallback.emit(event);
  }
}
