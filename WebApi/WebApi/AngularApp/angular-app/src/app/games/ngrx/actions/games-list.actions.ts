import { Action } from "@ngrx/store";
import { Game } from "../../models/game";

export enum GamesListActionType {
    GetGamesList = "[Games] Get Games List",
    GetGamesListSuccess = "[Games] Get Games List Success",
    GetGamesListFail = "[Games] Get Games List Fail",

    ResetGamesList = "[Games] Reset Games List"
}

export class GetGamesList implements Action {
    readonly type = GamesListActionType.GetGamesList;
}

export class GetGamesListSuccess implements Action {
    readonly type = GamesListActionType.GetGamesListSuccess;

    constructor(public payload: Array<Game>) { }
}

export class GetGamesListFail implements Action {
    readonly type = GamesListActionType.GetGamesListFail;

    constructor(public payload: any) { }
}

export class ResetGamesList implements Action {
    readonly type = GamesListActionType.ResetGamesList;
}

export type AllGamesActions = GetGamesList | GetGamesListSuccess | GetGamesListFail | ResetGamesList;
