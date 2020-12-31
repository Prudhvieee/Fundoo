import { Injectable } from '@angular/core';
import {HttpServiceService} from '../httpService/http-service.service'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private httpService:HttpServiceService) { }
  registerUser(data: { firstName: any; lastName: any; email: any; password: any; service: string; }){
    console.log("data in user service", data);
    return this.httpService.post('user/userSignUp',data);
  }
  loginUser(data) {
    console.log("data in user service", data);
    return this.httpService.post('user/login', data);
  }
  ForgotPassword(data){
    console.log("data in user service" , data);
    return this.httpService.post('user/reset',data);
  }
}
