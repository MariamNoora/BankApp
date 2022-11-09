import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {   //3rd execution

  aim=`Your Perfect Banking Partner`;
  accounts="Enter your account number";
  acno='';
  pswd='';
  userDetails: any;

  constructor(private router:Router, private ds:DataService ) { }  //1st execution
  // dependancy injection




  ngOnInit(): void {  //life cycle hooks - initial process
  }
//userdefined functions()     //4th execution


acnoChange(event:any)
{
  // console.log(event);
  console.log(event.target.value);
  this.acno=event.target.value;
}

pswdChange(event:any)
{
  console.log(event.target.value);
  this.pswd=event.target.value;  
}

login()
{
  // alert('Login clicked');
  var acno=this.acno;
  var pswd=this.pswd;
  const result=this.ds.login(acno,pswd);
  if(result)
  {
    alert("login successful")
    this.router.navigateByUrl('dashboard');
  }
}



// login(a:any,p:any)
// {
//   // alert('Login clicked');
//   var acno=a.value;
//   var pswd=p.value;
  
//   var userDetails=this.userDetails;

//   if(acno in userDetails)
//   {
//     if(pswd==userDetails[acno]['password'])
//     {
//       alert("login successful")
//     }
//     else
//     {
//       alert("incorrect password")
//     }
//   }
//   else
//   {
//     alert("user does not exist")
//   }
// }
}

