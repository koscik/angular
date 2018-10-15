import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "papp-playground",
  templateUrl: "./playground.component.html",
  styleUrls: ["./playground.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaygroundComponent implements OnInit {
  shouldBeGreen = true;
  classBindingExampleProperty = "pretty-color";
  constructor() { }

  ngOnInit() {
  }

}
