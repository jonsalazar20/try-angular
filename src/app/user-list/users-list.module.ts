import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { UsersListRoutingModule } from "./users-list-routing.module";

import { UsersListComponent } from "./users-list.component";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  imports: [
    CommonModule,
    UsersListRoutingModule,
    NgxDatatableModule
    
  ],
  exports: [],
  declarations: [
  
    UsersListComponent
],
  providers: [],
})
export class UsersListModule { }
