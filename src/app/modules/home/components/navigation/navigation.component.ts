import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  @Input() position : number = 0
  @Output() compNumber = new EventEmitter<number>()
  
  public active : Array<string> = ['active', '', '', '', '', '']

  constructor(){}

  ngOnInit(): void {
    
  }

  activeLink(position : number) {
    for (let i = 0; i < this.active.length; i++) {
      if (i == position){
        this.active[i] = 'active'
        this.compNumber.emit(i)
      } else {
        this.active[i] = ''
      }
    }
  }
}
