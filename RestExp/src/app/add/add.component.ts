import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

import { Employee } from '../interface';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  EmployeeForm: FormGroup;
  
  ngOnInit(): void {
    this.addEmployee();
  }

  constructor(private EmployeeService: EmployeeServiceService,public fb: FormBuilder,public location:Location) { }

  // addEmployee(Emp){
  //     this.EmployeeService.CreateEmployee(Emp).subscribe(data => {
  //       console.log("Employee added");
  //     });
  // }

  addEmployee() {
    this.EmployeeForm = this.fb.group({
      name: ['']
    })
  };

  submitEmployee(){
    this.EmployeeService.CreateEmployee(this.EmployeeForm.value).subscribe(res => {
      console.log('Employee added!');
  });
  }

  GoBack(){
    this.location.back()
  }


  

}
