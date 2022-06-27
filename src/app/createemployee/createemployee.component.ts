import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { employee } from '../Models/employee.model';
@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  data: employee = {
    id: 0,
    name: "",
    email: ""
  };
  constructor(private _empService: EmployeeService) { }

  ngOnInit(): void {

  }
  saveemployee(): void {
    this._empService.saveemployee(this.data).subscribe((data) => {
      console.log(data)
    })
  }

}
