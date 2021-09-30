import {Component} from '@angular/core';
import {Post} from "../../interfaces/post";
import {UUID} from "angular2-uuid";

@Component({
  selector: 'app-post-controller',
  templateUrl: './post-controller.component.html',
  styleUrls: ['./post-controller.component.scss']
})
export class PostControllerComponent {
  showed: boolean = true
  search: string = ''

  allPosts: Post[] = [
    {id: UUID.UUID(), title: 'Post 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, voluptatum.', date: new Date()},
    {id: UUID.UUID(), title: 'Post 2', text: 'Lorem.', date: new Date()},
    {id: UUID.UUID(), title: 'Post 3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, voluptatum.', date: new Date()},
  ]

  addPost(post: Post){
    this.allPosts.unshift(Object.assign({}, post))
  }

  removePost(id: string){
    this.allPosts = this.allPosts.filter(el => {
      return el.id !== id
    })
  }
}
