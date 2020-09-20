import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    showEmail = false
    show:boolean = false

    constructor(private router:Router) {
     }

    loginForm = new FormGroup({
        username: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required])
    })

    get username(){
        return this.loginForm.get('username')
    }

    get password(){
        return this.loginForm.get('password')
    }

    forgotPassword(){
        if(this.username.invalid){
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

    }

    ngOnInit(): void {
    }

}
