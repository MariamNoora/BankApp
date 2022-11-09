import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  //to hold accounts number
  acno:any;

  //to hold transaction details
  transaction:any;

  constructor(private ds:DataService) { 
    //to get value of current acno from data service
    this.acno=this.ds.currentAcno;
    this.transaction=this.ds.getTransaction(this.acno)
    console.log(this.transaction);
    
  }

  ngOnInit(): void {
  }

}
