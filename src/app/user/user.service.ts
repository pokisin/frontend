import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get("http://localhost:8080/getUsers");
  }
}
