import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  date$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })

}
