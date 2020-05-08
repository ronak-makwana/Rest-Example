import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Employee } from '../interface';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private EmployeeService: EmployeeServiceService,private location: Location) { }

  EmpList=[];
  Listemployee(){
    this.EmployeeService.GetEmployees().subscribe(data => this.EmpList =data);
  }

  Deleteemployee(id){
    this.EmployeeService.DeleteEmployee(id).subscribe(res => {
      console.log("Employee Deleted");
    })
  }

  GoBack(){
    this.location.back();
  }

  ngOnInit(): void {
    this.Listemployee();
  }

}
