import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { EmployeeRegistationService } from '../employee-registation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    
  });
  submitted = false;
  user:User;
  message:string;
  showPassword:boolean;
  employee:any;
  
  constructor(private service:EmployeeRegistationService, private auth:AuthService, 
    private formBuilder: FormBuilder, private route:Router) { 

  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: ['', [ Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  public login()
  {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    else {
      this.message = this.auth.login(this.form.value);
    
     }

  }
  public validate()
  {
    if(this.service.employee != null)
    {
      this.message = "login successfull";
      sessionStorage.setItem("islogin", "true");
      setTimeout(()=>{},1000);
      this.route.navigateByUrl('/profile');
      
    }
    else{
      this.message = "Invalid username/password";
    }
  }

}
