import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() receivedUser :string='';
  @Output() updatedUser:EventEmitter<string> = new EventEmitter<string>();
  dynamicUserName:string='';

  dynamicUpdateUser(input: any)
  {
    this.dynamicUserName=input.target.value;
    this.updatedUser.emit(this.dynamicUserName);
  }

  constructor() { }

  ngOnInit(): void {
    
  }
}
