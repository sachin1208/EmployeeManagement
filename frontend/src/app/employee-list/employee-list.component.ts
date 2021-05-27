import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
import { EmployeeService } from '../employee-service/employee.service';
import { AuthGuard } from '../shared/auth.guard';
import { RoleGuard } from '../shared/role.guard';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnChanges {

  employees: any;
  adminRights = true;
  constructor(private service: EmployeeService, public dialog: MatDialog, private roleGuard: RoleGuard) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  ngOnChanges(): void {
    console.log('ngOnchanges called');
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
    if (this.roleGuard.canActivate()) {
      const dialogRef = this.dialog.open(UpdateDialogComponent, {
        width: '500px',
        data: employee
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getEmployeeList();
      });
    }
  }

  getEmployeeById(employee: any): void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      data: employee
    });
  }

  addEmployeeDialog(): void {
    if (this.roleGuard.canActivate()) {
      const dialogRef = this.dialog.open(AddDialogComponent, {
        width: '500px'
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getEmployeeList();
      });
    }
  }
}
