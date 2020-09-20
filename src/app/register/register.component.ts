import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private router:Router) { }

    registerForm = new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        lastName: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required,Validators.email]),
        phone: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required])
    })

    get firstName(){
        return this.registerForm.get('firstName')
    }

    get lastName(){
        return this.registerForm.get('lastName')
    }

    get email(){
        return this.registerForm.get('email')
    }

    get phone(){
        return this.registerForm.get('phone')
    }

    get password(){
        return this.registerForm.get('password')
    }

  onSubmit(){
      this.router.navigate(['otp'])
  }

  ngOnInit(): void {
  }

}
