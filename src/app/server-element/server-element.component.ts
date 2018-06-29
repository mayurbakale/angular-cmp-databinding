import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element = {type: String, name: String, content: String}

  constructor() { }

  ngOnInit() {
  }

}
