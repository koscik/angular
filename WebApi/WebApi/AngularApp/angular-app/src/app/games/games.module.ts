import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { AllGamesComponent } from "./components/all-games/all-games.component";
import { GamesRoutingModule } from "./games-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule,
  ],
  declarations: [
    AllGamesComponent
  ]
})
export class GamesModule { }
