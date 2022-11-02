import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {   //3rd execution

  aim=`Your Perfect Banking Partner`;
  accounts="Enter your account number";
  acno='';
  password='';

  constructor() { }  //1st execution

  ngOnInit(): void {  //life cycle hooks - initial process
  }
//userdefined functions()     //4th execution
userDetails:any=   //object of objects
{
  1000:{acno:1000,username:'Gopik',password:1000,balance:10000},
  1001:{acno:1001,username:'Soja',password:1001,balance:10000},
  1002:{acno:1002,username:'Abhijith',password:1002,balance:10000}
}

acnoChange(event:any)
{
  // console.log(event);
  console.log(event.target.value);
  this.acno=event.target.value;
}

pswdChange(event:any)
{
  console.log(event.target.value);
  this.password=event.target.value;  
}

// login()
// {
//   // alert('Login clicked');
//   var a=this.acno;
//   var p=this.password;
  
//   var userDetails=this.userDetails;

//   if(a in userDetails)
//   {
//     if(p==userDetails[a][p])
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



login(a:any,p:any)
{
  // alert('Login clicked');
  var acno=a.value;
  var pswd=p.value;
  
  var userDetails=this.userDetails;

  if(acno in userDetails)
  {
    if(pswd==userDetails[acno]['password'])
    {
      alert("login successful")
    }
    else
    {
      alert("incorrect password")
    }
  }
  else
  {
    alert("user does not exist")
  }
}


}

