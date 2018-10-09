import { HttpClient } from "../../../../node_modules/@angular/common/http";
import { Observable } from "../../../../node_modules/rxjs";

export class GamesService {

    getAllGames(): Observable<string> {
        return this.http.get<string>("asdohsa");
    }

    constructor(private http: HttpClient) {
    }
}