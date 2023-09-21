import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeRegistationService } from '../employee-registation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    dob: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    experience: new FormControl(''),
    domain: new FormControl(''),
    mobileno: new FormControl(''),
  });
  submitted = false;
  date = new Date();

  employee: Employee=new Employee(0,"","","","",new Date(),0,0,"");
  message:any;

  constructor(private formBuilder: FormBuilder, private service:EmployeeRegistationService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        Uid:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
        username: ['', [ Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        dob: ['', [Validators.required]],
        experience: ['',[Validators.required, Validators.max(30)]],
        domain: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(20)]],
        mobileno: ['', [ Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
        
      });
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  registerNow(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    else{
      let resp=this.service.doRegistration(this.employee);
      resp.subscribe((data)=>this.message=data);
    }
  }
}
