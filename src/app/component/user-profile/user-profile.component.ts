import { UpperCasePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChange, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CCodePipe } from "../../pipe/c-code.pipe";


function change(value: string) {
  // will make name change when @Input recievs the value it is the changed one. in transform
  return `Hi ${value}`
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  imports: [FormsModule, UpperCasePipe, CCodePipe]
})

export class UserProfileComponent implements OnInit, AfterViewInit {

  @ViewChild("myHeading") heading?: ElementRef // This is the refrence of the element in html like document.querselector().


  constructor() {
    console.log("I am also one of the life cyle hook and get instanteously after instance creation , First i get called and after me onInit");
  }

  ngAfterViewInit(): void {
    console.log(this.heading?.nativeElement.textContent + "After init" + "Jab inputs kei baad template raedy hojati tab yei call hota hai");
  }

  ngOnInit() {
    console.log("I am a lifeCyleHook of angular almost same as constructor and is a good place for initial api call inputs ready hojate hai isme constructor mai any hote");
    console.log(this.heading?.nativeElement.textContent + "can not access in any of the life cyle only can access when template is ready");
  }

  ngOnDestroy() {
    console.log("destroy unregister event");
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("Unlike otheres called multiple times , jo bhi input receive kar rha hai uska access hai merepe , life cycle method" + changes);

  }

  @Input({ alias: "name", transform: change }) Username = "";
  //@Input() name = ""

  @Output() myEvent = new EventEmitter<{ Username: string }>()

  sendData() {
    this.myEvent.emit({ Username: this.Username });
  }


  name: string = "Madhav";
  age = 10;
  isBtn = true; // property binding
  phoneno = 123455;

  onValue: string = "";

  users = [
    { name: "Madhav", single: true },
    { name: "Sharma", single: false },
    { name: "Maggh", single: true },
  ]


  render(e: Event) {
    console.log("Log me to the console");
    console.log((e.target as HTMLInputElement).value);
    this.onValue = (e.target as HTMLInputElement).value;
  }
}
