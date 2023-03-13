import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    password: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  onSignUp() {
    this.signupUsers.push(this.signupObj)
    localStorage.setItem("user",JSON.stringify(this.signupUsers));
  }
  onLogin() {
   
  }

}
