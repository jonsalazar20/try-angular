import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";

import { DashboardComponent } from "./dashboard.component";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxDatatableModule
  ],
  exports: [],
  declarations: [
    DashboardComponent
  ],
  providers: [],
})
export class DashboardModule { }
