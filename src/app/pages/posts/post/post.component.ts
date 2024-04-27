import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {

  @Input() post: any;

  @Output() clickPost = new EventEmitter<number>();

  onClick() {
    this.clickPost.emit(this.post.id);
  }
}
