import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedreven',
  templateUrl: './templatedreven.component.html',
  styleUrls: ['./templatedreven.component.css']
})
export class TemplatedrevenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitform(f){
    console.log(f);
  }
}
