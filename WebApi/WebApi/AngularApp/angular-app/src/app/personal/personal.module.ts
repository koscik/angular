import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { PersonalInfoComponent } from "./components/personal-info/personal-info.component";
import { PersonalRoutingModule } from "./personal-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonalRoutingModule
  ],
  declarations: [PersonalInfoComponent]
})
export class PersonalModule { }
