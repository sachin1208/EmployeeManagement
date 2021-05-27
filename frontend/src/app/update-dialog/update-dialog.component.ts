import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {
  updateForm: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdateDialogComponent>,
              private service: EmployeeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      firstName: [this.data.firstName, Validators.required],
      lastName: [this.data.lastName, Validators.required],
      dob: [this.data.dob],
      gender: [this.data.gender],
      dept: [this.data.dept]
    });
  }

  onSubmit(): void {
    this.service.updateEmployee(this.data._id, this.updateForm.value).subscribe((res: any) => {
      this.dialogRef.close();
    });
  }

  updateBackground(){
    console.log("function called");
    
  }



}
