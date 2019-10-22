import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  classFlag: boolean = false;
  w = 100;
  h = 100;
  b = 2;
  c = 2;

  constructor() { }

  ngOnInit() {
  }

}
