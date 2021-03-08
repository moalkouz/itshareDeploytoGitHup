import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployee} from '../user';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  private _url : string="assets/emplyess.json";
  constructor(private http:HttpClient) {



   }



getEmployees():Observable<IEmployee[]>{

return this.http.get<IEmployee[]>(this._url);

}


  }
