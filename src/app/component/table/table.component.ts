import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  items:any;
  itemP:any;
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: string | null='';
  
  timetodayWithPipe: string | null='';
  CurrentTime: any;
  CurrentDate: any;
  constructor(private tableserv:TableService) {
    setInterval(() =>
     {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()
    }, 1);

    setInterval(() =>
    {
     this.CurrentDate =this.pipe.transform(Date.now(), 'dd/MM/yyyy');
   }, 1000);
 
    }
   

  ngOnInit(): void {
    this.tableserv.gatall().subscribe(item=>{
      this.items=item  ;
    });
    this.tableserv.gatallP().subscribe(item=>{
      this.itemP=item  ;
    });
    
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');

    this.timetodayWithPipe = this.pipe.transform(Date.now(), 'HH:mm:ss');

    // HH:mm:ss

    
    



  }

}








