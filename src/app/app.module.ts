import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, AgGridModule.withComponents([]) ],
  declarations: [ AppComponent, AgGridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
