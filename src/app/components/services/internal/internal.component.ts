import { Component } from '@angular/core';
import {CounterService} from "../../../services/counter.service";
import {LocalCounterService} from "../../../services/local-counter.service";

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss'],
  providers: [LocalCounterService]
})
export class InternalComponent {

  constructor(public counterService: CounterService,
              public localCounterService: LocalCounterService
  ) { }

}
