import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../interfaces/todo";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) {
  }

  getTodoByNumber(number: number){
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${number}`)
  }
}
