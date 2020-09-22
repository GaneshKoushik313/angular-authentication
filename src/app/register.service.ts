import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    url = "http://gklogin.gearhostpreview.com/api"
    constructor(private http:HttpClient) { 

    }

    saveUser(data){
        return this.http.post(this.url+'/users/register',data)
    }
    loginUser(data){
        return this.http.post(this.url+'/users/login',data)
    }
}
