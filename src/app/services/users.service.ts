import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { APIService } from '../common/api.service';
import { Observable }     from 'rxjs/Observable';



@Injectable()
export class UserService extends APIService {
  private resourceUrl = 'api/user';

  private todos: User[] = [
        new User('name1', 'lastname1', ''),
        new User('name2', 'lastname2', ''),,
        new User('name3', '', ''),
      ];


  create(value:string,value2:string,value3:string):Observable<User>{
      return this.post(this.resourceUrl,new User(value,value2,value3));
    }
 

  list(): Observable<User[]> {
    return this.get(this.resourceUrl);
  }

}