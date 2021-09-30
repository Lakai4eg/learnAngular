import { Component, OnInit } from '@angular/core';
import {Todo} from "../../interfaces/todo";
import {TodoService} from "../../services/todo.service";
import {UserForExpress} from "../../interfaces/user-for-express";

@Component({
  selector: 'app-work-with-server',
  templateUrl: './work-with-server.component.html',
  styleUrls: ['./work-with-server.component.scss'],
})
export class WorkWithServerComponent implements OnInit {
  allTodos: Todo[] = []
  currentTodoTitle = ''
  loading = false

  express = {
    error: false,
    response: {},
    respStatus: '',
    errorText: '',
    loading: false,
    loaded: false
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    this.loading = true
    this.todoService.getTodos()
      .subscribe(todos => {
        this.allTodos.push(...todos)
        this.todoService.current += this.todoService.limit
        this.loading = false
      })
  }

  addTodo() {
    this.loading = true
    let todo: Todo = {
      id: -1,
      userId: -1,
      title: this.currentTodoTitle,
      completed: false
    }

    this.todoService.addTodo(todo)
      .subscribe(resp => {
        this.allTodos.unshift(resp)
        this.currentTodoTitle = ''
        this.loading = false
      })
  }

  removeTodo(id: number){
    if (id){
      this.todoService.removeTodo(id)
        .subscribe(resp => {
          this.allTodos = this.allTodos.filter(el => {
            return el.id !== id
          })
        })
    }
  }

  finishTodo(id: number) {
    if (id) {
      this.todoService.finishTodo(id)
        .subscribe(resp => {
          const findedEl = this.allTodos.find(el => {
            return el.id === id
          })
          findedEl!.completed = true
        })
    }
  }

  sendToExpress(user: UserForExpress) {
    this.express.loading = true
    this.express.loaded = true
    this.todoService.sendToExpress(user)
       .subscribe(
         el => {
           this.express.response = el
           this.express.respStatus = 'ok'
           this.express.loading = false
         },
         error =>  {
           if(error.status === 0){
             console.error('Сервер не запущен')
             this.express.errorText = 'Сервер не запущен'
             this.express.loading = false
           }
         }
        );

  }
}
