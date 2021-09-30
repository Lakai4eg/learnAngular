import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Todo} from "../interfaces/todo";
import {catchError, delay} from "rxjs/operators";
import {throwError} from "rxjs";
import {UserForExpress} from "../interfaces/user-for-express";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  limit = 5
  current = 0

  constructor(private http: HttpClient) {
  }

  getTodos() {
    let params = new HttpParams()
    params = params.append('_limit', this.limit)
    params = params.append('_start', this.current)

    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos`, {params})
      .pipe(
        delay(500),
        catchError(err => {
          return throwError(`Ошибка: ${err.message}`)
        })
      )
  }

  addTodo(todo: Todo){
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
      .pipe(
        catchError(err => {
          return throwError(`Ошибка: ${err.message}`)
        })
      )
  }

  removeTodo(id: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .pipe(
              delay(300),
              catchError(err => {
                return throwError(`Ошибка: ${err.message}`)
              })
            )
  }

  finishTodo(id: number){
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
      .pipe(
        catchError(err => {
          return throwError(`Ошибка: ${err.message}`)
        })
      )
  }

  sendToExpress(user: UserForExpress){
    return this.http.post('http://localhost:3000/postuser', {user})
      .pipe(
        delay(500)
      )
  }
}
