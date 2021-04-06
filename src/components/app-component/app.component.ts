import { of, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filterBy = (name: string): string => {
    return name;
  };

  htmlPreview = (name: string): string => {
    return name.toUpperCase();
  };

  api(keyword: string): Observable<string[]> {
    const response = [
      'Ellie-Mae Rodgers',
      'Lacey Salter',
      'Klar Salter',
      'Teigan Lister',
      'Amda Soft',
      'Artur Lord',
      'Luis Tison'
    ].filter((name) => name.toLowerCase().includes(keyword.toLowerCase()));
    return of(response).pipe(debounceTime(1000));
  }

  preview(name: string): void {
    setTimeout(() => {
      alert('Returned target value: ' + name);
    }, 50);
  }
}
