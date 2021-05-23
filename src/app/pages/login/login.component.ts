import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials: object;
  username = '';
  password = '';

  constructor(private router: Router) {
    this.credentials = {
      username: 'Moneytolia',
      password: 'moneytoliacase',
    };
  }

  ngOnInit(): void {
    localStorage.setItem('credentials', JSON.stringify(this.credentials));
  }

  login(): void {
    const { username, password } = JSON.parse(<any>localStorage.getItem('credentials'));
    if (this.username === username && this.password === password) {
      this.router.navigate(['/dashboard/campaign-list']);
    }
  }
}
