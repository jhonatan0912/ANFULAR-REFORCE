import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.posts = this.dataService.getPosts()
  }

  escuchaClick(id: number) {
    console.log('Click en ' + id);
  }

}
