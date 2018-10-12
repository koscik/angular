import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import * as fromGames from "../../ngrx/reducers";
import { Game } from "../../models/game";
import { Store, select } from "@ngrx/store";
import { GetGamesList } from "../../ngrx/actions/games-list.actions";

@Component({
  selector: "papp-all-games",
  templateUrl: "./all-games.component.html",
  styleUrls: ["./all-games.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllGamesComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor(private readonly store: Store<fromGames.State>) { }

  ngOnInit() {

    this.subscription = this.store.pipe(select(fromGames.getGamesList)) // watch for changes in getGamesList...
      .subscribe(games => this.handleGamesList(games)); // and subscribe to them

    // Call an action that will start the GetGamesList action through effect, store up to reducer state
    this.store.dispatch(new GetGamesList());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleGamesList(games: Array<Game>) {
    console.log(games);
  }
}
