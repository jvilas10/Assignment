import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private upersons: User[] = [
    {
      id: 1,
      firstName: 'Vilas',
      lastName: 'Jadhav',
      emailid:'jvilas10@gmail.com',
      phoneNumber:9422059866,
      status:true,
    },
    {
      id: 2,
      firstName: 'Pushpa',
      lastName: 'Shinde',
      emailid:'pushpa@gmail.com',
      phoneNumber:9422059866,
      status:true,
    }
  ]
  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    let index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
