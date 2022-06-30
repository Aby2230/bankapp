import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
currentUser:any
currentAcno:any
   //DATABASE
   db :any = {
    1000:{"acno":1000,"username":"aby","password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001,"username":"bae","password":1001,"balance":50000,transaction:[]},
    1002:{"acno":1002,"username":"saly","password":1002,"balance":3000,transaction:[]}
  }

  constructor() {
   this.getDetails()
   }

  //get details from local storage
  getDetails(){
   if(localStorage.getItem("database")){
     this.db=JSON.parse(localStorage.getItem("database")|| '')
   } 
   if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser")|| '')
  } 
  if(localStorage.getItem("currentAcno")){
    this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")|| '')
  } 
  }

//saveDetails()
saveDetails(){
  if(this.db){
    localStorage.setItem("database",JSON.stringify(this.db))
  }
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
  if(this.currentAcno){
    localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  }
}


//login
  login(acno:any,pswd:any){
   
   let db=this.db

   if(acno in db ){
     if(pswd ==db[acno]["password"]){

this.currentUser=db[acno]["username"]
this.currentAcno=acno
this.saveDetails()
       return true
       
  
    }
   else{
      alert("incorrect password")
      return false
   }
   }
    else{
      alert("user does not exist")
      return false
   }
  }
//register
register(username:any,acno:any,password:any){
  let db=this.db
if(acno in db){
    return false
  }
  else{
db[acno]=
{acno,
  username,
  password,
  "balance":0,
  transaction:[]
 
  
}
console.log(db)
this.saveDetails()
return true 
}

}
//deposite
deposit(acno:any,password:any,amt:any){

  var amount= parseInt(amt)

  let db=this.db
  if(acno in db){
    if(password==db[acno]["password"]){

      db[acno]["balance"]+=amount
      db[acno].transaction.push(
        {
          type:"CREDIT",
          amount:amount
        }
      )
      console.log(db);
      
      this.saveDetails()
      return db[acno]["balance"]

    }
    else{
      alert("incorrect password")
      return false
    }

  }else{
    alert("user does not exist")
    return false
  }

}
//withdraw
withdraw(acno:any,password:any,amt:any){
  var amount= parseInt(amt)

  let db=this.db
  if(acno in db){
    if(password==db[acno]["password"]){

      if(db[acno]["balance"]>amount){


        db[acno]["balance"]-=amount
        db[acno].transaction.push(
          {
            type:"DEBIT",
            amount:amount
          })
        this.saveDetails()
      return db[acno]["balance"]

      }
      else{
        alert("Insufficent Balance")
        return false
      }

      db[acno]["balance"]+=amount
      return db[acno]["balance"]

    }
    else{
      alert("incorrect password")
      return false
    }

  }else{
    alert("user does not exist")
    return false
  }

}

getTransaction(acno:any){
  return this.db[acno].transaction
  

}


  }



