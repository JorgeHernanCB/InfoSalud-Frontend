import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWordService {

  private apiURl = 'http://localhost:8080/api/hola?nombre=juab';


  constructor( private http:HttpClient) { }

  getHelloWord(): Observable<String>{
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('user:password')
    })
    return this.http.get(this.apiURl, {headers, responseType: 'text'});
  }
}
