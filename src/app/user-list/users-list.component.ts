import { Component, OnInit, ViewChild, ViewEncapsulation,AfterViewInit } from "@angular/core";
import { RouterStateSnapshot } from '@angular/router';
import { DatatableComponent, ColumnMode } from "@swimlane/ngx-datatable";
import { Observable } from 'rxjs';
import { CorporativeService }  from './../generales/_services/corporative.service';

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: [
    "./users-list.component.scss",
    "/assets/sass/libs/datatables.scss"
  ],
  encapsulation: ViewEncapsulation.None,
})
export class UsersListComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  name = 'Jonathan'
  // row data
  rous = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  public rows = this.rous;
  public ColumnMode = ColumnMode;
  public limitRef = 10;

  // column header
  // public columns = [
  //   { name: this.name, prop: this.name },
  //   { name: this.name, prop: this.name },
  //   { name: "Name", prop: this.name },
  //   { name: "Last Activity", prop: this.name },
  //   { name: "Verified", prop: this.name },
  //   { name: "Role", prop: "Role" },
  //   { name: "Status", prop: "Status" },
  //   { name: "Actions", prop: "Actions" },
  // ];
  public columns = [
    { prop: 'name' }, 
    { name: 'Gender' }, 
    { name: 'Company' }
  ];

  // private
  private tempData = [];

  corporativesData: any [] = [];


  constructor(private corporativeService: CorporativeService) {
     this.tempData = this.rous;
  }
  ngOnInit(): void {
    this.getData();

  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */
  // filterUpdate(event) {
  //   const val = event.target.value.toLowerCase();

  //   // filter our data
  //   const temp = this.tempData.filter(function (d) {
  //     return d.Username.toLowerCase().indexOf(val) !== -1 || !val;
  //   });

  //   // update the rows
  //   this.rows = temp;
  //   // Whenever the filter changes, always go back to the first page
  //   this.table.offset = 0;
  // }

  /**
   * updateLimit
   *
   * @param limit
   */
  updateLimit(limit) {
    this.limitRef = limit.target.value;
  }

  


  getData(){
    this.corporativeService.getAllCorporatives()
    .subscribe(response=>{
      for (const corporativo of response) {
        this.corporativesData.push(corporativo)
        
      }
    })
    console.log(this.corporativesData);
  }
}
