import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GetDataService} from "../../services/get-data.service";
import {Todo} from "../../interfaces/todo";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit{
  todo: Todo = {
    userId: 1,
    id: 1,
    title: '',
    completed: false
  }
  wrongId = false

  constructor(private router: Router,
              private getService: GetDataService,
              private route: ActivatedRoute
              ) { }
  ngOnInit(){
    this.route.params.subscribe((param: Params) => {
      this.todo.id = +param.id
    })
    this.getTodoById(this.todo.id)
  }

   navigate(url:string){
    this.router.navigate([`/${url}`])
  }

  getTodoById(todo: number){
    this.getService.getTodoByNumber(todo)
      .pipe(
        catchError((err) =>{
          if (err.status === 404){
            this.wrongId = true
          }
          return throwError('Задайте id в диапазоне от 1 до 200')
        })
      )
      .subscribe(el => {
        this.todo = el
        this.wrongId = false
      })
  }
}
