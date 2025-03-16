import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // template:`<div class="red-text">Hello World Angular {{name}} is here</div>`
})
export class AppComponent {
  title = 'first-steps-angular';
  name = "Igor Viana"
}
