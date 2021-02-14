import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'phone', 'address', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    setTimeout(() => this.dataSource.paginator = this.paginator);

  }
}

/* Static data */ 
export interface PeriodicElement {
  position: number;
  name: string;
  phone: number;
  address: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'WALMART', phone: 734908577, address: 'Whitefield, Bangalore', status: 'Active', action: '' },
  { position: 2, name: 'WALMART', phone: 734908577, address: 'Whitefield, Bangalore', status: 'Active', action: '' },
  { position: 3, name: 'WALMART', phone: 734908577, address: 'Whitefield, Bangalore', status: 'Active', action: '' },
  { position: 4, name: 'WALMART', phone: 734908577, address: 'Whitefield, Bangalore', status: 'Active', action: '' },
  { position: 5, name: 'WALMART', phone: 734908577, address: 'Whitefield, Bangalore', status: 'Active', action: '' },
  { position: 6, name: 'WALMART', phone: 734908577, address: 'Whitefield, Bangalore', status: 'Active', action: '' },
  { position: 7, name: 'WALMART', phone: 734908577, address: 'Whitefield, Bangalore', status: 'Active', action: '' },
  { position: 8, name: 'WALMART', phone: 734908577, address: 'Whitefield, Bangalore', status: 'Active', action: '' },
  { position: 9, name: 'WALMART', phone: 734908577, address: 'Whitefield, Bangalore', status: 'Active', action: '' },
  { position: 10, name: 'WALMART', phone: 734908577, address: 'Whitefield, Bangalore', status: 'Active', action: '' },

];