import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private httpOptions;
  constructor(private httpclient: HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders(
        {
          'apikey': 'bGKH1JC2SLbH5XAHvqM6iqosjff17Jdm'
          // 'Content-Type':'Application/Json'
          
        }
      )
    }
   }
  gatall(): Observable<any> {
    return this.httpclient.get<any>('https://api.apilayer.com/exchangerates_data/latest?&base=USD',this.httpOptions) 
  }
gatallP(): Observable<any> {
  return this.httpclient.get<any>('https://data-asg.goldprice.org/dbXRates/USD') }



  }
