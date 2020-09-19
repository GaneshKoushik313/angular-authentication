import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

    constructor() { }

    forgotPassword = new FormGroup({
        email : new FormControl('',[Validators.required]),
        password : new FormControl('',[Validators.required]),
        confirmPassword : new FormControl('',[Validators.required])
    })

    get email(){
        return this.forgotPassword.get('email')
    }

    get password(){
        return this.forgotPassword.get('password')
    }

    get confirmPassword(){
        return this.forgotPassword.get('confirmPassword')
    }

    onSubmit(){
        
    }

  ngOnInit(): void {
  }

}
