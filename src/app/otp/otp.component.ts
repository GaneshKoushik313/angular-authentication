import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.component.html',
    styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

    timer = 60

    constructor() { }
    onOtpChange(value){
        console.log(value)
    }

    countDownTimer(){
        setInterval(() => {
            this.timer--
            if(this.timer <=0){
                this.timer = 0
            }
        }, 1000);
    }

    ngOnInit(): void {
        this.countDownTimer()
    }

}
