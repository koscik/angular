import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./layout/components/main-page/main-page.component";
import { PlaygroundComponent } from "./shared/components/playground/playground.component";

const routes: Routes = [
    { path: "", component: MainPageComponent },
    { path: "games", loadChildren: "./games/games.module#GamesModule" },
    { path: "personal", loadChildren: "./personal/personal.module#PersonalModule" },
    { path: "playground", component: PlaygroundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
