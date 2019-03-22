import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent {
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
