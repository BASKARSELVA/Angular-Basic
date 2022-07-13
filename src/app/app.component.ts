import { Component } from '@angular/core';
//import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAddDisabled=false;
  constructor()
  {
      setTimeout(()=>{this.isAddDisabled=true },3000);
  }
  title = 'AL1Component';
  headerAlign ='center';
  fontColor='red';
  twowayTitle='TwowayTitle';
  user='';

  addUser()
  {
    this.user="User1 Added";
  }

  updateUser(newItem: string)
  {
    this.user=newItem;
  }
}
