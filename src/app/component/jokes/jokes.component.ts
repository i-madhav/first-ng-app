import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit{
  joke = "Loading";
  // service bhi ek dependeency hai
  constructor(private jokeservice:JokesService){}

  ngOnInit(): void {
    // will get execute once after all the components ui is rendered fully . 
    this.getAnotherJoke();
  }

  getAnotherJoke(){
      // can use .subs coz returning a observable and it is like a promise
   try {
     this.jokeservice.getJoke().subscribe((data:any) =>{
       console.log(data);
       this.joke = data.value;
     })
   } catch (error) {
    console.log(error);
    
   }
  }

}


/*
The code you provided is a part of an Angular component class, and it is attempting to make an HTTP GET request to the "https://api.chucknorris.io/jokes/random?category=dev" API endpoint using the `HttpClient` service provided by Angular.

Let's break it down:

1. `private http: HttpClient`: This line declares a private property named `http` of type `HttpClient`. The `HttpClient` is an Angular service that provides a simplified interface for making HTTP requests.

2. `Dependency injection`: This is a comment indicating that the `HttpClient` service is being injected into the component class through a process called dependency injection. Angular's dependency injection system manages the creation and lifecycle of services and makes them available for use in other parts of the application.

3. `constructor(private http: HttpClient)`: This is the constructor of the component class. The `HttpClient` service is injected into the constructor as a parameter. Angular's dependency injection system takes care of creating an instance of the `HttpClient` service and passing it to the constructor.

4. `this.http.get("https://api.chucknorris.io/jokes/random?category=dev")`: Inside the constructor, an HTTP GET request is being made to the specified API endpoint using the `get` method of the `HttpClient` service.

However, this code snippet alone is not complete and won't work as intended. It's missing some crucial parts:

1. **Observable handling**: The `get` method of `HttpClient` returns an `Observable`, which is a stream of data that can emit multiple values over time. In Angular, you typically subscribe to an Observable to handle the response data and any potential errors. Without proper Observable handling, the HTTP request will be made, but the response won't be processed.

2. **Asynchronous handling**: The HTTP request is an asynchronous operation, so it should not be executed directly in the constructor. Instead, it should be performed in the appropriate lifecycle hook (e.g., `ngOnInit()`) or triggered by a user action (e.g., clicking a button).

To properly use the `HttpClient` service and handle the response, you would need to subscribe to the Observable returned by `get` and handle the response data and potential errors accordingly. Here's an example of how you might do that in the `ngOnInit` lifecycle hook:

```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  // ...
})
export class MyComponent implements OnInit {
  private http: HttpClient;
  joke: string;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
      .subscribe(
        (response: any) => {
          this.joke = response.value;
        },
        (error) => {
          console.error('Error fetching joke:', error);
        }
      );
  }
}
```

In this example, the HTTP request is made in the `ngOnInit` lifecycle hook, and the `subscribe` method is used to handle the response data and potential errors. The response data is assigned to the `joke` property, which can then be used in the component's template.
*/ 