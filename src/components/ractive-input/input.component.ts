import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Required } from 'src/decorators/required.decorator';
import { Helpers } from 'src/utilities/helpers';
import { CustomValidator } from 'src/utilities/validators';

@Component({
  selector: 'reactive-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() name = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'number' | 'text' | 'password' = 'text';
  @Input() required = false;
  @Input() class = '';
  @Input() @Required control: FormControl;

  ngOnInit(): void {
    if (this.control) this.required = Helpers.hasRequiredField(this.control);
    if (!this.label) this.label = Helpers.humanize(this.name, true);
    if (!this.placeholder)
      this.placeholder = `Enter ${Helpers.humanize(this.name)}`;
  }

  get showError(): string {
    return CustomValidator.showError(this.control, this.label);
  }
}
