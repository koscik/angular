import * as fromRoot from "../../../reducers-global";
import * as fromGamesList from "./games-list.reducer";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export interface GamesState {
    gamesList: fromGamesList.State;
}

export interface State extends fromRoot.State {
    games: GamesState;
}

export const gamesReducers: ActionReducerMap<GamesState> = {
    gamesList: fromGamesList.reducer,
}

export const getGamesState = createFeatureSelector<GamesState>("games");

// App state -> games module -> Games list component -> allGames property
export const getGamesList = (state: State) => state.games.gamesList.allGames;
