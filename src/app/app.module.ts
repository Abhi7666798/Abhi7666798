import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { FormsModule } from '@angular/forms';
import { employee } from './Models/employee.model';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
