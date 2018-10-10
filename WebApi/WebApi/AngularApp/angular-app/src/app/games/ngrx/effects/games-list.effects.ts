import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";

import { GamesService } from "../services/games.service";
import { GamesListActionType,  GetGamesListFail, GetGamesListSuccess } from "../actions/games-list.actions";
import { Game } from "../../models/game";

@Injectable()
export class GamesListEffects {

    @Effect()
    getGamesList$: Observable<Action> = this.actions$.pipe(
        ofType(GamesListActionType.GetGamesList),
        switchMap(() => this.service.getGamesList()
            .pipe(
                map((data: Array<Game>) => new GetGamesListSuccess(data)),
                catchError(error => of(new GetGamesListFail(error)))
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly service: GamesService
    ) { }

}
