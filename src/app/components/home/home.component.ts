import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, NavbarComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 teste = () =>{
  console.log('Teste')
}

  initialCount = 0;

}
