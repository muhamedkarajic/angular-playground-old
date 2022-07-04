import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Object } from './shared/models/example.model';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
})
export class RootComponent {
  Object = Object;
  object = new Object() as any;

  constructor(private router: Router) {
    setInterval(() => { (this.object as Object).id = "RANDOM_NAME_X2" }, 1000)
  }

  onClick()
  {
    // this.router.navigate(['']);
  }
}
