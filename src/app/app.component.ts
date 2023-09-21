import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  islogin: Observable<boolean>;
  key:any;
  title = 'Employee-registration-client';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.islogin = this.authService.isLoggedIn;
  }
    
}
  
