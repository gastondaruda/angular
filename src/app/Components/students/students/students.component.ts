import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  listaNombres: Array<any> = [
    {nombre:"Ramiro", nota:10},
    {nombre:"Lucas", nota:8},
    {nombre:"Alejandro", nota:5}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
