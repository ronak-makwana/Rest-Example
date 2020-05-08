import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry , catchError } from 'rxjs/operators';

import { Employee } from './interface';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  //Server URL
  url ='http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //POST
  CreateEmployee(data):Observable<Employee[]>{
    return this.http.post<Employee[]>(this.url + '/EmployeeData/',JSON.stringify(data),this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  //GET
  GetEmployee(id): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + '/EmployeeData/'+ id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }


  //GET
  GetEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + '/EmployeeData/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  //PUT
  UpdateEmployee(id,data): Observable<Employee[]>{
    return this.http.put<Employee[]>(this.url + '/EmployeeData/' + id,JSON.stringify(data),this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        );
  }

  DeleteEmployee(id){
    return this.http.delete<Employee[]>(this.url + '/EmployeeData/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
  
}
