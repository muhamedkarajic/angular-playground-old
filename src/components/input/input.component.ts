import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { hasRequiredField } from 'src/helpers/has-required-field';
import { CustomValidator } from 'src/utilities/validators';

@Component({
  selector: 'reactive-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() name = '';
  @Input() label = '';
  @Input() type: 'number' | 'text' | 'password' = 'text';
  @Input() required = false;
  @Input() class = '';
  @Input() control: FormControl;

  ngOnInit(): void {
    this.required = hasRequiredField(this.control);
  }

  get showError(): string
  {
    return CustomValidator.printError(this.control);
  }
}
