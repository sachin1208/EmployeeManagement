import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
import { EmployeeService } from '../employee-service/employee.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: any;
  constructor(private service: EmployeeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList(): void {
    this.service.getEmployees().subscribe((res: any) => {
      this.employees = res;
    });
  }

  deleteEmployee(employee: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: employee
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getEmployeeList();
    });
  }

  updateEmployee(employee: any): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '500px',
      data: employee
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getEmployeeList();
    });
  }

  getEmployeeById(employee: any): void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      data: employee
    });
  }
}
