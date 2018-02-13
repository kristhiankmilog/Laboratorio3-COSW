import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

import {UserService}from '../../services/users.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {
  private userForm: FormGroup;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
        name: '',
        lastName: '',
        photo: ''
    });
  }

  onSubmit() {
    this.userService.create(
      this.userForm.get('name').value,
      this.userForm.get('lastName').value,
      this.userForm.get('photo').value
    );

    this.router.navigate(['/tasks']);
  }

}