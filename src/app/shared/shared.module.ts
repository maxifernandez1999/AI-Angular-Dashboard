import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DataService } from './services/data.service';
import { CrudModule } from '../pages/crud/crud.module';

@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterLink,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    CrudModule
  ],
  exports:[
    ToolbarComponent
  ],
  providers: [DataService]
})
export class SharedModule { }
