import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
