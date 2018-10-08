import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { PersonalInfoComponent } from "./components/personal-info/personal-info.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PersonalInfoComponent]
})
export class PersonalModule { }
