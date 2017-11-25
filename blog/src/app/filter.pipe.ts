import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(blogs: any, term: any): any {

    if(term === undefined) return blogs;

    return blogs.filter(function(blog){
      return blog.title.toLowerCase().includes(term.toLowerCase());
    })
  }

}
