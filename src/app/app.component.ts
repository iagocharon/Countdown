import { Component, OnInit } from "@angular/core";
import { gsap } from "gsap";

declare let countdown: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Countdown";

  ngOnInit() {
    new countdown();
  }
}
