import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  url:SafeUrl=''
  mobileNumber:any
  loginForms=new FormGroup({
    mobileNumber: new FormControl("",[Validators.required])
    })
  error: boolean | undefined;
  constructor(private router: Router) {}
   get MobileNumber(){
    return this.loginForms.get('mobileNumber')as FormControl;
   }
  
  onSubmit() {
    if (this.mobileNumber.startsWith('6') || this.mobileNumber.startsWith('7') || this.mobileNumber.startsWith('8') || this.mobileNumber.startsWith('9')) {

      // Simulate the scenario where mobile number already exists
      if (this.mobileNumber === '9570305507') {
        this.error = false;
        // Navigate back to the
      alert('Mobile number already exists! Please enter your password.');
      // Navigate to the password field
      this.router.navigate(['/password']);
    }
    else {
      this.error = true;
      // Navigate to the signup page
     // this.router.navigate(['/signup']);
    }
    }
  }
  onCodeChange(url:SafeUrl){
    console.log(url);
    this.url=url;
    }
  
}
