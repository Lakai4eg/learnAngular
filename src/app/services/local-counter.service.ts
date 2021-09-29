import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
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
