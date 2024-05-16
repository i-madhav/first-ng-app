import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  //private http = inject(HttpClient);

  constructor(private http: HttpClient /*Dependency injection*/) {
    // observable is like  a promise will response after some delay
  }

  getJoke(){
    return this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
  }

}
