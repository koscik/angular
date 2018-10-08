import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./layout/components/main-page/main-page.component";

const routes: Routes = [
    { path: "", component: MainPageComponent },
    { path: "games", loadChildren: "./games/games.module#GamesModule" },
    { path: "personal", loadChildren: "./personal/personal.module#PersonalModule" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
