import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { B2Component } from '../b2/b2.component';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [B2Component],
  //providers:[CounterService], // What this line will do is . It will give seperate instance of CS to A and B1 and since B@ is inside B1 they will share the same instnace
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css'
})
export class B1Component {
  constructor(public countInc:CounterService){}
}
