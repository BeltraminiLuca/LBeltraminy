import { Component, Input, OnInit, Output } from '@angular/core';
import { data } from '../data';


@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  @Input() 
  dato;

  
  constructor() {
   }

  ngOnInit() {
 
  }

}