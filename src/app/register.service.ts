import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    // url = "https://angular-project-44a55.web.app"
    url = "localhost:5000"
    constructor(private http:HttpClient) { 

    }

    saveUser(data){
        return this.http.post(this.url+'/users/register',data)
    }
    loginUser(data){
        return this.http.post(this.url+'/users/login',data)
    }
}
