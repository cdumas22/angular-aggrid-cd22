import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import "ag-grid-enterprise";

@Component({
  selector: 'my-app', 
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  gridOptions: GridOptions = {
    columnDefs: [
      {headerName: 'Make', field: 'make', sortable: true},
      {headerName: 'Model', field: 'model', sortable: true},
      {headerName: 'Price', field: 'price', sortable: true}
      
    ]
  };
  rowData = [
    { make: 'ford', model: 'F150', price: 28949 },
    { make: 'ford', model: 'Mustang', price: 50949 }
  ];
}
