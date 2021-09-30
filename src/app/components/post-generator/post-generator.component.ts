import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../../interfaces/post";
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-post-generator',
  templateUrl: './post-generator.component.html',
  styleUrls: ['./post-generator.component.scss']
})
export class PostGeneratorComponent {
  @Output() postAdd = new EventEmitter<Post>()
  addedPost: Post = {
    id: '',
    title: '',
    text: '',
    date: new Date(),
  }

  pickDate(event: string){
    this.addedPost.date = new Date(event)
  }

  addPost(evt: Event) {
    this.postAdd.emit(this.addedPost)
    this.addedPost.title = this.addedPost.text = '';
    this.addedPost.date = new Date();
    this.addedPost.id = UUID.UUID()
  }
}
