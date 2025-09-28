import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 employeeId: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    
  }

  onLogin() {
    if (this.employeeId) {
      localStorage.setItem('loggedInEmployee', this.employeeId);
      this.router.navigate(['/rides']); 
    }
  }
}
