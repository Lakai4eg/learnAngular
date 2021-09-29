import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count = 0

  inc(){
    this.count++
  }

  dec(){
    this.count--
  }

  getValue(){
    return this.count
  }
}
