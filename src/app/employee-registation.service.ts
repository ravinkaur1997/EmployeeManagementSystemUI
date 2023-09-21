import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistationService {

  public employee:any;

  constructor(private http:HttpClient) { }

  public doRegistration(employee){
    return this.http.post("http://localhost:9090/register",employee,{responseType:'text' as 'json'});
  }

  public editDetails(employee){
    return this.http.put("http://localhost:9090/update",employee,{responseType:'text' as 'json'});
  }

  public doLogin(user){
    return this.http.post("http://localhost:9090/login/",user);
  }

  public getEmployees(){
    return this.http.get("http://localhost:9090/getAllEmployees");
  }
  public getEmails(){
    return this.http.get("http://localhost:9090/getAllEmployees")
    .pipe(map((response:[]) => response.map(item => item['email'])));
  }

  public getUserByEmail(email){
    return this.http.get("http://localhost:9090/findEmpByMail/"+email);
  }

  public getUserByFirstName(firstname){
    return this.http.get("http://localhost:9090/findByFirstnamePrefix/"+firstname);
  }

  public deleteEmployee(id){
    return this.http.delete("http://localhost:9090/delete/"+id);
  }
}
