import { Observable, of } from "rxjs";
import { Game } from "../../models/game";
import { Injectable } from "@angular/core";

@Injectable()
export class GamesService {

    getGamesList(): Observable<Array<Game>> {
        return of([
            new Game({
                // id: uuid(),
                name: "Diablo III",
                description: "A good game",
                grade: 8.3
            })
        ]);
    }

    constructor() {
    }
}