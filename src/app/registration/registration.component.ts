import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {  

  // uname="";
  // acno="";
  // pswd="";

  userDetails: any;

  //register model
  registerForm=this.fb.group //group
  ({
    uname:[''],  //array
    acno:[''],  //array
    pswd:['']  //array

    //control goes to register.html
  })

  constructor(private fb:FormBuilder,private ds:DataService, private router:Router) { }  //dependancy injection

  ngOnInit(): void {
  }

  registration()
  {
    console.log(this.registerForm);
    
    // alert("register clicked")

    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;

    const result=this.ds.register(acno,uname,pswd);
    
    if(result)
    {
      alert("Successfully registered.");
      this.router.navigateByUrl('')
    }
    else
    {
      alert("Something went wrong.");
    }

  }


  login(acno:any, password:any)
  {
    let userDetails=this.userDetails;
    if(acno in userDetails)
    {
      if(password==userDetails[acno]['password'])
      {
        return true;
      }
      else
      {
        alert('Incorrect password')
        return false;
      }
    }
    else
    {
      alert('Invalid user')
      return false;
    }
  }

  

}
