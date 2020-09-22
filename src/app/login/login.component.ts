import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { RegisterService } from '../register.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    showEmail = false
    show:boolean = false

    constructor(private router:Router, private userData: RegisterService) {
     }

    loginForm = new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })
    get email(){
        return this.loginForm.get('email')
    }

    get password(){
        return this.loginForm.get('password')
    }

    forgotPassword(){
        if(this.email.invalid){
            this.showEmail = true
        }
        else{
            this.router.navigate(['reset-password'])
        }
    }

    showPassword(){
        this.show = !this.show;
    }

    onSubmit(){
        this.userData.loginUser(this.loginForm.value).subscribe((response)=> {
            console.log(response)
        })
    }

    ngOnInit(): void {
    }

}
