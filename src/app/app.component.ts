import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  enabled = false;
  serverName = '';
  isCreated = false;
  serverCreationStatus = "";

  constructor() {
    setTimeout(() => {
      this.enabled = true;
    }, 2000);
  }
  onButtonClick(){
    this.isCreated = true;
    this.serverCreationStatus = "Server is now created.. and the name is " + this.serverName;
  };

}
