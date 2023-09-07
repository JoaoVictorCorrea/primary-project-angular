import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {

  @Input() myProp: string = '';
  @Output() newItemEvent = new EventEmitter<string>();

  handleClick(): void {
    
    this.newItemEvent.emit("oiii pai");
  }
}
