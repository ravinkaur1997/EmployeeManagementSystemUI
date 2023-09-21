import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Employee } from '../employee';
import { EmployeeRegistationService } from '../employee-registation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  employees:any;
  search:string;
  options = [];
  item:String;
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  
  formGroup: FormGroup;
  constructor(private service:EmployeeRegistationService, private fb: FormBuilder) {
    this.getAllEmails();
   }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );    
  }

  private _filter(value) {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public getAllEmails() {
    this.service.getEmails().subscribe(resp => {this.options = resp})
  }
  public findUser() {
    this.search = this.myControl.value
    let resp= this.service.getUserByEmail(this.search);
    resp.subscribe((data)=>this.employees=data);

  }
  public findUserByFirstName(){
    this.search = this.myControl.value
    let resp= this.service.getUserByFirstName(this.search);
    resp.subscribe((data)=>this.employees=data);
  }
}
