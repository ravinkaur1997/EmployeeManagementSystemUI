import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeRegistationService } from '../employee-registation.service';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {

  employee:any;
  name:string;
  message:any;
  constructor(private service:EmployeeRegistationService) { }

  ngOnInit() {
    this.employee = this.service.employee;
  }
}
