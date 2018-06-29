import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server", name: "Name of Server", content:"Test Content"}];

  onServerAdded(server: {name: string, content:string}) {
    this.serverElements.push({
      type: 'server',
      name: server.name,
      content: server.content
    });
  }

  onBlueprintAdded(blueprint: {name: string, content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprint.name,
      content: blueprint.content
    });
  }
}