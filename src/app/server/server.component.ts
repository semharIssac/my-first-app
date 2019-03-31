import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent{

  serverId = 10;
  serverStatus = 'online';

  constructor() {
    this.serverId = Math.ceil(Math.random() * 10.00); 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getBackgroundColor() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}