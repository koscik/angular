import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MainPageComponent,
  ],
  declarations: [
    MainPageComponent,
  ]
})
export class LayoutModule { }
