import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    RouterModule,
  ],
  declarations: []
})
export class SharedModule { }
