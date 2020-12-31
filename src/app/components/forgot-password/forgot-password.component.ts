import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserServiceService} from '../../services/userService/user-service.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm: FormGroup;
  email: string="";
  constructor(private formBuilder: FormBuilder,private router: Router,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.emailForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  next(emailFormValue){
    try{
      let email={
        email:emailFormValue.email
      }
      this.userService.ForgotPassword(email).subscribe(response =>{
        console.log("Password rest link has been sent to"+response)
        alert("Password rest link has been sent to"+response)
      })
    }
    catch(err){
      console.log(err);
    }
  }

}
