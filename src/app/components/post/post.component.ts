import {Component, ContentChild, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../../post";
import '@angular/common/locales/global/ru';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() postItem: Post = {
    id: '',
    title: '',
    text: '',
    date: new Date()
  }
  @Output() onPostRemove: EventEmitter<string> = new EventEmitter<string>()
  @ContentChild('postType') postType!: ElementRef

  onRemovePost(){
    this.onPostRemove.emit(this.postItem.id)
  }
}
