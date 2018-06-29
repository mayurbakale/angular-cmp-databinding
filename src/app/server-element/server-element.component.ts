import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { DoCheck } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements 
OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input('srvElement') element = {type: String, name: String, content: String}
  @Input() name: string

  @ViewChild('heading') heading: ElementRef
  @ContentChild('paragraph') paragraph: ElementRef

  constructor() { 
    console.log("constructor called")
  }

  ngOnInit() {
    console.log("ngOnInit called")
    console.log("TextServer Heading: "+this.heading.nativeElement.textContent)
    console.log("TextServer Paragraph: "+this.paragraph.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called")
    console.log(changes)
  }

  ngDoCheck() {
    console.log("ngDoCheck called")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called")
    console.log("TextServer Heading: "+this.heading.nativeElement.textContent)
    console.log("TextServer Paragraph: "+this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called")
    console.log("TextServer Heading: "+this.heading.nativeElement.textContent)
    console.log("TextServer Paragraph: "+this.paragraph.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called")
  }

}
