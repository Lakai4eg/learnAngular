import { Component } from '@angular/core';
import {CounterService} from "../../services/counter.service";
import {LocalCounterService} from "../../services/local-counter.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [LocalCounterService]
})
export class ServicesComponent {
  constructor(public counterService: CounterService,
              public localCounterService: LocalCounterService
              ) { }
}
