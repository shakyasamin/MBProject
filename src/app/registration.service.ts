import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  _url = "http://192.168.0.149:8088/api/Auth/Register";

  constructor(private _http: HttpClient) { }

  register(userData){
    return this._http.post<any>(this._url, userData);
  }
}
