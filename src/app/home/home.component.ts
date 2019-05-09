import { Component, ElementRef, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  firstbutton: string = "";
  secondbutton: string = "";
  btn_1: string = "Click for Tip";
  btn_2: string = "Click for Another Tip";

  constructor(private eRef: ElementRef) {}

  firstbuttonClick() {
    this.firstbutton = "this is first button and some random text";
    this.btn_1 = "Hover for Tip";
    this.btn_2 = "Click for Another Tip";
    this.secondbutton = "";
  }

  secondbuttonClick() {
    this.firstbutton = "";
    this.btn_1 = "Click for Tip";
    this.btn_2 = "Hover for Tip";
    this.secondbutton = "this is second button";
  }

  @HostListener("document:click", ["$event"])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.btn_1 = "Click for Tip";
      this.btn_2 = "Click for Another Tip";
      this.firstbutton = "";
      this.secondbutton = "";
    }
  }

  @HostListener("document:keydown.escape", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event) {
      this.btn_1 = "Click for Tip";
      this.btn_2 = "Click for Another Tip";
      this.firstbutton = "";
      this.secondbutton = "";
    }
  }
  ngOnInit() {}
}
