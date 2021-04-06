import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];

@Component({
	selector: 'autocomplete-input',
	templateUrl: './autocomplete-input.component.html'
})
export class AutoCompleteInputComponent<T> implements OnInit {
	@Input() callback: (keyword: string) => Observable<T[]>;
	@Input() filterBy: (obj: T) => string;
	@Output() selected: EventEmitter<string> = new EventEmitter<string>();
	objects: T[];
	objReturnValue: FormControl = new FormControl(null);
	@Input() targetProp: string = null;
	isSearchDisabled = false;
	keyword: FormControl = new FormControl('');
	@Input() htmlPreview: (object: T) => string;

	ngOnInit(): void {
		this.callback(this.keyword.value).subscribe((objects: T[]) => (this.objects = objects));

		this.objReturnValue.valueChanges.subscribe((objReturnValue: string) =>
			this.selected.emit(objReturnValue)
		);

		this.keyword.valueChanges
			.pipe(
				debounceTime(500),
				filter(() => {
					const isSearchable = !this.isSearchDisabled;
					this.isSearchDisabled = false;
					return isSearchable;
				})
			)
			.subscribe((keyword) =>
				this.callback(keyword).subscribe((objects: T[]) => (this.objects = objects))
			);
	}

	selectObj(object: T): void {
		this.objReturnValue.setValue(this.targetProp ? getKeyValue(this.targetProp)(object) : object);
		this.isSearchDisabled = true;
		this.objects = [];
	}

	filterObject(obj: T): string {
		if (this.objects && obj) {
			return this.filterBy(obj);
		}
		return null;
	}
}
