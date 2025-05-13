import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CounterComponent } from "../counter/counter.component";
import { InputComponent } from "../input/input.component";
import { CatFactsComponent } from "../cat-facts/cat-facts.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, NavbarComponent, CounterComponent, InputComponent, CatFactsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 teste = () =>{
  console.log('Teste')
}

  initialCount = 0;

}
