import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeRegistationService } from '../employee-registation.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  employees:any;
  email:string;
  
  constructor(private service:EmployeeRegistationService) { }

  public deleteEmp(id:number){
  let resp= this.service.deleteEmployee(id);
  resp.subscribe((data)=>this.employees=data);
  }

  ngOnInit() {
      let resp=this.service.getEmployees();
      resp.subscribe((data)=>this.employees=data);
    }

}