import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      contactPreference: 'Email',
      gender: 'Male',
      email: 'mark@gmail.com',
      phoneNumber: 123456,
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      contactPreference: 'Phone',
      gender: 'Female',
      email: 'mary@gmail.com',
      phoneNumber: 456789,
      dateOfBirth: new Date('10/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 2,
      name: 'John',
      contactPreference: 'Phone',
      gender: 'Male',
      email: 'john@gmail.com',
      phoneNumber: 126794,
      dateOfBirth: new Date('10/24/1996'),
      department: 'SALES',
      isActive: false,
      photoPath: 'assets/images/john.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
