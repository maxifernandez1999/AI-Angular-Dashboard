import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mf-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  onSubmit() {
    console.log(this.user);
    this.router.navigate(['/dashboard']);
  }
  login(){
    this.router.navigate(['/login']);
  }
}
