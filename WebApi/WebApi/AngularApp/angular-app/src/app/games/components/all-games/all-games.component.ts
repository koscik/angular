import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-all-games",
  templateUrl: "./all-games.component.html",
  styleUrls: ["./all-games.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllGamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
