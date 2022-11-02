import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {  

  uname="";
  acno="";
  pswd="";

  constructor() { }

  ngOnInit(): void {
  }

  registration()
  {
    alert("register clicked")
    // var uname=this.uname;
    // var acno=this.acno;
    // var pswd=this.pswd;
  }

}
