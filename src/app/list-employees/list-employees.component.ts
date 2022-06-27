import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { employee } from '../Models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor(private _get:EmployeeService) { }

  listEmployee: employee[];

  employee: employee;

  

  ngOnInit(): void {
    this._get.getemployee().subscribe((data)=> {
      this.listEmployee=data;
      // console.log(this.employee.id);
    })
  }

  deleteById(id:number){
    
    this._get.deleteEmployee(id).subscribe((data) =>{
      console.log(data);
    })
  }

}
