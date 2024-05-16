import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./component/user-profile/user-profile.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { JokesComponent } from "./component/jokes/jokes.component";
import { AComponent } from './component/a/a.component';
import { B1Component } from './component/b1/b1.component';
import { B2Component } from './component/b2/b2.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserProfileComponent, FormsModule, CommonModule, UpperCasePipe, JokesComponent,AComponent,B1Component,B2Component]
})
export class AppComponent {
 user = [
  {name:"Madhav Sharma" , age:20},
  {name:"Madh Bard" , age:10}
 ]

 receivedData(e:object){
  console.log(e);
 }
}
