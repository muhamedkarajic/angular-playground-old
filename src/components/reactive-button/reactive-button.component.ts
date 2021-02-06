import { Component, Input } from '@angular/core';

@Component({
  selector: 'reactive-button',
  templateUrl: './reactive-button.component.html',
  styleUrls: ['./reactive-button.component.scss']
})
export class ReactiveButtonComponent {
  @Input() name = '';
  @Input() label = '';
  @Input() type: 'button' | 'menu' | 'rest' | 'submit' = 'button';
  @Input() class = '';
}
