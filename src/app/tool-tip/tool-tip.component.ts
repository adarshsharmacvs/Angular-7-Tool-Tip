import { Component, OnInit, Input } from "@angular/core";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "appToolTip",
  styleUrls: ["./tool-tip.component.css"],
  templateUrl: "./tool-tip.component.html",
  animations: [
    trigger("tooltip", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition(":leave", [animate(300, style({ opacity: 0 }))])
    ])
  ]
})
export class ToolTipComponent implements OnInit {
  constructor() {}
  @Input() text = "";
  ngOnInit() {}
}
