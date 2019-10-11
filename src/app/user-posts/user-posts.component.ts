import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  constructor(private _data: DataService) { }

  submittedPost;

  postList;

  sliderValue;

  ngOnInit() {
  }

  receivePost($event) {
    this.submittedPost = $event;
  }

  getPostList() {
    return this._data.getPosts(this.sliderValue)
      .subscribe(data => this.postList = data);
  }

}
