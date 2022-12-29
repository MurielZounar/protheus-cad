import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public components : Array<boolean> = [true, false, false, false, false, false]
  public position : number = 0

  constructor(){}

  ngOnInit(): void {
    
  }

  public activeComponent(component : number){
    for (let i = 0; i < this.components.length; i++) {
      if (i == component){
        this.components[i] = true
      } else {
        this.components[i] = false
      } 
    }
  }
}
