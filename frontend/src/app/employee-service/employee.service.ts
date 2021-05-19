import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployee(body: any): any {
    return this.http.post(`http://localhost:3000/employees`, body);
  }

  getEmployees(): any{
    return this.http.get(`http://localhost:3000/employees`);
  }

  deleteEmployee(id: any): any {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }

  updateEmployee(id: any,  body: any): any {
    return this.http.put(`http://localhost:3000/employees/${id}`, body);
  }
}
