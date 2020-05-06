import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  model: any = {};
  users: User[];
  userForm: boolean = false;
  isNewUser: boolean=false;
  isEdit:boolean=false;
  newUser: any = {};
  editUserForm: boolean = false;
  editedUser: any = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  showEditUserForm(user: User) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.isEdit=true;
    this.userForm = true;
    this.newUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.isEdit=false;
    this.userForm = true;
    this.isNewUser = true;

  }
  onSubmit(user: User){
    user.status=true;
    this.isEdit=false;
    this.userService.addUser(user);
    this.newUser = {};
    this.userForm = false;
   }

  saveUser(user: User) {
    
    if (this.isNewUser) {
      //add a new user
    
      this.userService.addUser(user);
    }
    this.userForm = false;
  }
  changeStatus(user: User,){
   if(user.status){
    user.status=false;
   }else{
    user.status=true;
   }
         
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.userForm = false;
    this.newUser = {};
  //  this.editedUser = {};
  }

  removeUser(user: User) {
    this.userService.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

}
