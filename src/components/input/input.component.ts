import { Component, Input } from '@angular/core';

@Component({
  selector: 'reactive-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() type: 'number' | 'text' = 'text';
  @Input() required = false;
  @Input() class = '';
}
