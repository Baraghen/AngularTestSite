import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  _url = 'https://jsonplaceholder.typicode.com/posts';

  getAlbums() {
    return this.http.get('https://baraghen.github.io/webshop/items.json')
  }

  users = [];

  createUser(user) {
    this.users.push(JSON.parse(JSON.stringify(user)));
  }

  getUserList() {
    return this.users;
  }

  posts: Observable<Post[]>;
  newPost: Observable<Post[]>;

  createPost(post) {
    return this.newPost = this.http.post<Post[]>(this._url, post);
  }

  getPosts(number) {
    return this.posts = this.http.get<Post[]>(`${this._url}?_limit=${number}'`);
  }
}
