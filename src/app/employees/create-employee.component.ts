import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  previewPhoto = false;

  datepickerConfig: Partial<BsDatepickerConfig>;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null,
  }

  constructor() {
    this.datepickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2020, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'
    })
  }

  departments: Department[] = [
    {
      id: 1,
      name: 'Help Desk'
    },
    {
      id: 2,
      name: 'HR'
    },
    {
      id: 3,
      name: 'IT'
    },
    {
      id: 4,
      name: 'Payroll'
    },
    {
      id: 5,
      name: 'Sales'
    }
  ];

  name;
  email;
  gender = 'female';
  phoneNumber;
  contactPreference;
  isActive = 'true';
  department = 3;
  dateOfBirth: Date = new Date(2020, 0, 1);
  photoPath = 'assets/images/mark.png';

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
