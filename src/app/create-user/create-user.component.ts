import { Component, OnInit } from '@angular/core';
import { UserModel } from './../model/user.model';
import { CreateUserService } from './create-user.service';
import { OK } from './../model/httpstatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers:[CreateUserService]
})
export class CreateUserComponent implements OnInit {
  
  private user:UserModel;
  private isValid:boolean=true;
  private message:string="";

  constructor( private createuserS:CreateUserService, private router: Router) {
    this.user = new UserModel();
  }

  ngOnInit() {
  }

  public saveOrUpdate():void{
    this.isValid = this.createuserS.validate(this.user);
    console.info(this.isValid);
    if(this.isValid){
      this.createuserS.saveOrUpdate(this.user).subscribe(res=>{
        if(res.responseCode == OK){
          this.router.navigate(['/users']);
        }else{
          this.message=res.message;
          this.isValid = false;
        }
      });
    }else{
      this.message="Los campos con asterisco son obligatorios";
    }
  }

}
