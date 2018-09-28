import { NgModule } from "@angular/core";
import { AllGamesComponent } from "./components/all-games/all-games.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: "", component: AllGamesComponent },
    { path: "all", component: AllGamesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule {
}
