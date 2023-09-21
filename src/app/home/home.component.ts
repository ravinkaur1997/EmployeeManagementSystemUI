import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private route:Router) { }

navigateToLogin()
{
  this.route.navigateByUrl("/login")
}
navigateToRegister()
{
  this.route.navigateByUrl("/register")
}
  ngOnInit() { }
}

