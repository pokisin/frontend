import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { UserModel } from '../model/user.model';
import { CIRCULAR } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  private users:Array<UserModel>;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers():void{
    this.userservice.getUsers().subscribe(res=>{
      this.users=res as UserModel[];
      console.info(this.users);
    });
  }

}
