import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { RegisterService } from '../register.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private router:Router,private userData:RegisterService) { }

    show = false

    registerForm = new FormGroup({
        first_name: new FormControl('',[Validators.required]),
        last_name: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required,Validators.email]),
        phone: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })

    get first_name(){
        return this.registerForm.get('first_name')
    }

    get last_name(){
        return this.registerForm.get('last_name')
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

    async onSubmit(){
        try{
            this.userData.saveUser(this.registerForm.value).subscribe((response)=>{
                console.log(response)
                try{
                    Swal.fire({
                        icon: 'success',
                        text: 'User Saved Successfully',
                    })
                    setTimeout(() => {
                        this.router.navigate([''])
                    }, 2000);
                }
                catch(error){
                    Swal.fire({
                        icon: 'error',
                        text: 'User Registration Failed',
                    })
                }
            })
        }
        catch(error){
            Swal.fire({
                icon: 'error',
                text: 'User Registration Failed',
            })
        }
    }

    ngOnInit(): void {
    }

}
