import { Component, Input, Output } from "@angular/core";
import { data } from "./data";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @Output ()
  datos = data;
  ngOnInit() {
  }

  constructor(){
    
  }

}