import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  /* A decorator that allows us to pass data from the parent component to the child component. */
  @Input() post: any;

  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickPost.emit(this.post.id);
  }

}
