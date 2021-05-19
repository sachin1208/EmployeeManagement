import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  createForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    dept: ['', Validators.required]
  });
  success = false;
  constructor(private fb: FormBuilder, private service: EmployeeService) { }

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
    this.service.addEmployee(this.createForm.value).subscribe((res: any) => {
      this.success = true;
      setTimeout(() => {
        this.success = false;
        this.createForm = resetValue;
      }, 2000);
    });
  }

}
