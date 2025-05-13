import { Component } from '@angular/core';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-cat-facts',
  imports: [],
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.scss'
})
export class CatFactsComponent {

  constructor(private service: HelloWorldService){
    this.service.getFact().subscribe(
      data=>{
        this.catFact = data.fact;
      },
      (error)=>{
        console.error("Erro ao obter fatos: ", error)
      }
    )
  }

  catFact = ""
}
