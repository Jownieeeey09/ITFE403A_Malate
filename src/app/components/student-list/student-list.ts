import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  students = [
    {
      name: 'Mary Beth D. Gracia',
      course: 'BSIT',
      yearLevel: '4th Year'
    },
    {
      name: 'Bonna Mae L. Pitogo',
      course: 'BSIT',
      yearLevel: '4th Year'
    },
    {
      name: 'Niel Jhon E. Celocia',
      course: 'BSIT',
      yearLevel: '4th Year'
    },
    {
      name: 'Kurt Wojtyle S. Rizal',
      course: 'BSIT',
      yearLevel: '4th Year'
    }
  ];

}