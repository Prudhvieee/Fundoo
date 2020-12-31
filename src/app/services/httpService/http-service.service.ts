import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl=environment.baseUrl
  constructor(private http:HttpClient) { }
  token: any;
  post(url: string,data){
    this.token=localStorage.getItem('token');
    console.log("token is",this.token);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      })
    }
    console.log(" data in http ", data);
    return this.http.post(this.baseUrl + url , data,options);
  }
  get(url: any){
    this.token=localStorage.getItem('token');
    let options={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
  return this.http.get(this.baseUrl+url,options);
  }
  update(){

  }
  delete(){

  }
}
