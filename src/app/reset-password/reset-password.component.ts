import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

    constructor(private router: Router) { }

    show_password = false
    show_confirm_password = false

    forgotPassword = new FormGroup({
        email : new FormControl('ganeshkoushik@gmail.com',[Validators.required]),
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
        this.router.navigate([''])
    }

  ngOnInit(): void {
  }

}
