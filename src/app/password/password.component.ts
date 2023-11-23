import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  error: boolean = false;
  constructor(private router: Router) {}
  onSubmit() {
    // Simulate the password verification (correct password is "1234")
    if (this.password === '1234') {
      this.error = false;
      // Navigate to the 4-digit PIN field
      this.router.navigate(['/dashboard']);
    } else {
      this.error = true;
    }
  }
}
