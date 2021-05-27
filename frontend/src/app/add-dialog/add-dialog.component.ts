import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor( private fb: FormBuilder, private service : EmployeeService, public dialogref: MatDialogRef<AddDialogComponent> ) { }

  createFormDialog: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    dept: ['', Validators.required]
  });

  success = false;
  ngOnInit(): void {
    
  }
  onSubmit(): void {
    const resetValue = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      dept: ['', Validators.required]
    });
    this.service.addEmployee(this.createFormDialog.value).subscribe((res: any) => {
      this.success = true;
      setTimeout(() => {
        this.success = false;
        this.createFormDialog = resetValue;
      }, 2000);
    });
  }

  closeDialog(){
    this.dialogref.close();
  }

}
