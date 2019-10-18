import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Post } from '../../assets/class/post';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  createdPost: Post = { id: null, userId: null, title: '', body: ''};

  submittedPost;

  postForm;

  postList;

  getErrorMessageUserId() {
    return this.postForm.get('userIdControl').hasError('required') ? 'You must enter an UserId' :
      this.postForm.get('userIdControl').hasError('pattern') ? 'Only numbers 1 or higher are allowed' :
        '';
  }

  getErrorMessageTitle() {
    return this.postForm.get('titleControl').hasError('required') ? 'You must enter a title' :
        '';
  }

  getErrorMessageBody() {
    return this.postForm.get('bodyControl').hasError('required') ? 'You must enter something here, go nuts!' :
        '';
  }

  get userIdControl() {
    return this.postForm.get('userIdControl');
  }

  get titleControl() {
    return this.postForm.get('titleControl');
  }

  get bodyControl() {
    return this.postForm.get('bodyControl');
  }

  @Output() postEvent = new EventEmitter<Post[]>();

  onSubmit() {
    this._data.createPost(this.postForm.value).subscribe(
      data => { 
        this.submittedPost = data;
      },
      error => { console.log(error);
      },
      () => {
        this.transferPost(this.submittedPost);
      }
      
    );
  }

  transferPost(transferData) {
    this.postEvent.emit(transferData);
  }

  constructor(private _data: DataService, private fb: FormBuilder) { }

  ngOnInit() {

    this.postForm = this.fb.group({
      userIdControl: [this.createdPost.userId, [Validators.required, Validators.pattern(/^-?([1-9]\d*)?$/)]],
      titleControl: [this.createdPost.title, [Validators.required, Validators.max(30)]],
      bodyControl: [this.createdPost.body, [Validators.required, Validators.max(250)]]
    });
  }

}
