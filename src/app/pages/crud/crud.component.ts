import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { FormComponent } from './form/form.component';
// import { FormGroup, FormBuilder, Validators }

// import { UserFormComponent } from '../user-form/user-form.component';
@Component({
  selector: 'mf-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'phone', 'calification', 'state', 'actions'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.userService.getUsers());
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '400px',
      data: { title: 'Add User', user: { id: null, name: '', email: '', phone: '' } }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.addUser(result);
        this.dataSource.data = this.userService.getUsers();
      }
    });
  }
  openEditUserDialog(user: User): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '400px',
      data: { title: 'Edit User', user }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.updateUser(result);
        this.dataSource.data = this.userService.getUsers();
      }
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.dataSource.data = this.userService.getUsers();
  }
}

