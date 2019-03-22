import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgGridComponent } from './ag-grid/ag-grid.component';

const routes: Routes = [
  {
    path: 'ag-grid',
    component: AgGridComponent,
    data: { title: 'Ag-Grid Base' }
  },
  {
    path: '',
    redirectTo: '/ag-grid',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
