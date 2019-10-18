import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  createdUser = { name: '', email: ''};

  submitted = false;
  
  userForm;

  userList;

  getErrorMessageName() {
    return this.userForm.get('nameControl').hasError('required') ? 'You must enter a name' :
      this.userForm.get('nameControl').hasError('minlength') ? 'That is too short of a name' :
      this.userForm.get('nameControl').hasError('maxlength') ? 'Too many characters for a name' :
        '';
  }

  getErrorMessageEmail() {
    return this.userForm.get('emailControl').hasError('required') ? 'You must enter an email' :
      this.userForm.get('emailControl').hasError('email') ? 'You must enter a valid email adress ex: "a@a.com"' :
        '';
  }

  get nameControl() {
    return this.userForm.get('nameControl');
  }

  get emailControl() {
    return this.userForm.get('emailControl');
  }

  onSubmit() {
    this._data.createUser(this.userForm.value);
    this.submitted = true;
    this.populateUserList();
  }

  populateUserList() {
    this.userList = this._data.getUserList();
  }

  constructor(private _data: DataService, private fb: FormBuilder) { }

  ngOnInit() {

    this.userForm = this.fb.group({
      nameControl: [this.createdUser.name, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      emailControl: [this.createdUser.email, [Validators.required, Validators.email]]
    });
  }

}