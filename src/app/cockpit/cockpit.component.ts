import { Component, OnInit, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('srvCreated') serverCreated = new EventEmitter<{name:string, content:string}>();
  @Output() blueprintCreated = new EventEmitter<{name:string, content:string}>();

  newServerName = '';
  newServerContent = '';
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      /* name: this.newServerName,  */
      name: nameInput.value,
      content:this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      /* name: this.newServerName,  */
      name: nameInput.value,
      content:this.newServerContent
    });
  }
}
