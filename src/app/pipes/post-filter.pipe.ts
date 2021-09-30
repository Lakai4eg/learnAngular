import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../interfaces/post";

@Pipe({
  name: 'postFilter',
  pure: false
})
export class PostFilterPipe implements PipeTransform {

  transform(posts: Post[], filter: string = ''): Post[] {
    return posts.filter(post => {
      return post.title.includes(filter.trim())
    })
  }

}
