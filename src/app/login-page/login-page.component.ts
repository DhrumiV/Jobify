import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  imports: [FormsModule],
  standalone: true,
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    phone: '',
    role: '',
    password: '',
  };
  loginObj: any = {
    userName: '',
    role: '',
    password: '',
  };

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');

    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));

    this.signupObj = {
      userName: '',
      email: '',
      phone: '',
      role: '',
      password: '',
    };
    // this.showLogin = true;
  }
  onLogin() {
    const isUserExists = this.signupUsers.find(
      (m) =>
        m.userName == this.loginObj.userName &&
        m.password == this.loginObj.password &&
        m.role == this.loginObj.role
    );
    if (isUserExists != null) {
      localStorage.setItem('currentUser', JSON.stringify(isUserExists));

      alert(`${this.loginObj.role} Logged In Successfully`);
      this.router.navigate(['/navbar'], {
        queryParams: { role: this.loginObj.role },
      });
    } else {
      alert('Wrong Credentials , please try again!!! ');
    }
  }
}
