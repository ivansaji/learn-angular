import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public calcInput : string = '';

  constructor() { }

  ngOnInit() {
  }
  btnClicked(val){
    console.log("this is",this.calcInput);
  }
}
  