import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    url = "http://localhost:5000/api"
    constructor(private http:HttpClient) { 

    }

    saveUser(data){
        return this.http.post(this.url+'/users/register',data)
    }
}