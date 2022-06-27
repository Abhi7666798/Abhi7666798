import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { employee } from "./Models/employee.model";

@Injectable()
export class EmployeeService{
    constructor(private _httpClient:HttpClient){}
    employee: employee;
     url="https://localhost:44331/api/db/";
    getemployee():Observable<employee[]>{
        return this._httpClient.get<employee[]>(this.url);
    }

    saveemployee(employee:employee){
        return this._httpClient.post<string>(this.url,employee,{
            headers:new HttpHeaders ({
                "Content-Type": "application/json"
        })
        })
    }


    deleteEmployee(id: number): Observable<employee> | null{
        return this._httpClient.delete<employee>(`${this.url}`+id,{
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          })
    }
}