import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = model<number>(0);

  updateCount = (amount:number) =>{
    this.count.update(currCount => currCount + amount);
  }

  resetCount = () =>{
    this.count.update(()=> 0);
  }
}
