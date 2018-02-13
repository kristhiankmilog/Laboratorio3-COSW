import{Component, OnInit}from '@angular/core';
import {TodoService}from '../../services/todo.service';
import{User} from '../../models/User';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  private todos: User[] = [];

  constructor(public todoService: TodoService) {

  }

  ngOnInit() {
    
  }

}