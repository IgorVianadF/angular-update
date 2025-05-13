import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  private apiUrl = "https://catfact.ninja/fact"

  constructor(private client:HttpClient) {}

      getFact = ():Observable<any> =>{

      return this.client.get(this.apiUrl)
    } 
}
