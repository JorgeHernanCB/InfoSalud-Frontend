import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWordService {

  private apiURl = 'http://localhost:8080/api/hola?nombre=Cristian';
  private apiURLuserFind = 'http://localhost:8080/user/findAll';
  private apiURLuserSave = 'http://localhost:8080/user/save';


  constructor( private http:HttpClient) { }

  getHelloWord(): Observable<String>{
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('user:password')
    })
    return this.http.get(this.apiURl, {headers, responseType: 'text'});
  }

  // Ver usuarios
  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.apiURLuserFind);
  }

  //Guardar usuario
  addUser(user:any): Observable<any>{
    return this.http.post<any>(this.apiURLuserSave, user);
  }
}
