import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.css']
})
export class TransationComponent implements OnInit {
transactions:any
  acno=JSON.parse(localStorage.getItem("currentAcno") ||'')

  constructor(private ds : DataService) { 
  this.transactions=  this.ds.getTransaction(this.acno)
  }

  ngOnInit(): void {
  }

}