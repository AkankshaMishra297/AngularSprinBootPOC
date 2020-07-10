import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import {RootObject} from 'src/app/root-object';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  users:RootObject;
  constructor(private service:UserService, private _router:Router ) { }

  ngOnInit(): void {
    let resp=this.service.getUsers();
    resp.subscribe(data=> {this.users=data});
    console.log(this.users)
  }
  
  public deleteUser(name:String){
    let resp= this.service.deleteUser(name);
    resp.subscribe(date=>{console.log("deleted")})
    console.log("aaaaaaaaaaaa")
    console.log(name)
    this._router.navigate(['/list']);
   }

   newUser(){
   
     this._router.navigate(['/register']);
   
   }
   editUser(user){  
    this.service.setter(user);
    this._router.navigate(['/edit']);
  }

}
