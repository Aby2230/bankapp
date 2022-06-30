import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //properties
  aim=" perfect banking partner"
accno="Accountnumber Please"
acno=""
pswd=""

loginForm= this.fb.group({
acno :['',[Validators.required,Validators.pattern('[0-9]*')]],

pswd :['',[Validators.required,Validators.pattern('[a-zA-Z)-9]*')]]
})

//dependency injection
  constructor(private router: Router , private ds :DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

//acnoChange(event:any){
 // this.acno=event.target.value 
//  console.log(this.acno);
 
//}

//pswdChange(event:any){
  //this.pswd =event.target.value 
 // console.log(this.pswd);
//}

// tow way
login(){
  var acno=this.loginForm.value.acno                  
  var pswd=this.loginForm.value.pswd

  if(this.loginForm.valid){
    const result = this.ds.login(acno,pswd)
    if(result){
        alert("Login succesful")
        this.router.navigateByUrl('dashboard')
   
     }
   }
 else{
   alert("Invalid Form")

 }

}
}

// template referencing veriable 
 //login(a:any,p:any){
//console.log(a.value);
// var acno=a.value                 
  //var pswd=p.value
  //let db=this.db
  //if(acno in db ){
    //if(pswd ==db[acno]["password"]){
    //  alert("Login succesful")

   // }
    //else{
      // alert("incorrect password")
    //}
  // }
 // else{
   // alert("user does not exist")
  //}
//}
//}