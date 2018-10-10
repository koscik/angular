import { Game } from "../../models/game";
import { AllGamesActions, GamesListActionType } from "../actions/games-list.actions";

/*
 * The state of Games list. This contains only elements related to games list view
*/
export interface State {
    allGames: Array<Game>;
}

const initialState: State = {
    allGames: []
};

export function reducer(
    state = initialState,
    action: AllGamesActions
): State {
    switch (action.type) {

        case GamesListActionType.GetGamesList: {
            // Nothing happens when initial call ends -> return state unchanged
            return { ...state };
        }

        case GamesListActionType.GetGamesListFail:
        case GamesListActionType.GetGamesListSuccess: {
            // For both success and fail we return the action payload
            return {
                ...state,
                allGames: action.payload
            };
        }

        case GamesListActionType.ResetGamesList: {
            // Resetting the state by returning the initial state
            return initialState;
        }

        default: {
            // Some unsupported (new?) action happened
            return state;
        }
    }
}
