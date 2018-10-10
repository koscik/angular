import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { GamesListEffects } from "./ngrx/effects/games-list.effects";

import { SharedModule } from "../shared/shared.module";
import { AllGamesComponent } from "./components/all-games/all-games.component";
import { GamesRoutingModule } from "./games-routing.module";

import { GamesService } from "./ngrx/services/games.service";
import { StoreModule } from "@ngrx/store";
import * as fromGames from "./ngrx/reducers";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule,
    EffectsModule.forFeature([
      GamesListEffects,
    ]),
    StoreModule.forFeature("games", fromGames.gamesReducers),

  ],
  declarations: [
    AllGamesComponent
  ],
  providers: [GamesService]
})
export class GamesModule { }
