import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  // private count = 0;

  // getCount(){
  //   return this.count;
  // }

  // incrementCount(){
  //   return this.count += 1;
  // }

  //connverting in signal
  // If you want performance benefit you should use signal
  private count = signal(0);

  getCount(){
    // writeable signal and readable signal
    return this.count()
  }

  incrementCount(){
   // return this.count.set(this.count() +1);
   this.count.update((oldVlue) =>{
    return oldVlue +1;
   })
  }
}
