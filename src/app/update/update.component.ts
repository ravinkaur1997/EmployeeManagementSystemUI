import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeRegistationService } from '../employee-registation.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  message:any;
  //employee: Employee=new Employee(0,"","","","",new Date(),0,0,"");
  employee: any;
  constructor(private service:EmployeeRegistationService) {
    
   }

   public update() {
      this.service.editDetails(this.employee).subscribe((data)=>this.message=data);
   }

  ngOnInit() {
    this.employee = this.service.employee;
  }

}
