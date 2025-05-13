import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  textValue:string = '';
  
  handleChange(event:Event){
    this.textValue = (event.target as HTMLInputElement).value;
  }
}
