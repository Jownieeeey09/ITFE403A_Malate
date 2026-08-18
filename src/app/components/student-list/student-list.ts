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
    { name: 'Mary Beth D. Gracia', course: 'BSIT', yearLevel: '4th Year', isFavorite: false },
    { name: 'Bonna Mae L. Pitogo', course: 'BSIT', yearLevel: '4th Year', isFavorite: false },
    { name: 'Niel Jhon E. Celocia', course: 'BSIT', yearLevel: '4th Year', isFavorite: false },
    { name: 'Kurt Wojtyle S. Rizal', course: 'BSIT', yearLevel: '4th Year', isFavorite: false }
  ];

  deleteMessage = '';
  editingStudent: any = null;

  onFavoriteClick(student: any) {
    student.isFavorite = !student.isFavorite;
  }

  onEditClick(student: any) {
    this.editingStudent = student;
  }

  onDeleteClick(index: number) {
    const removedStudent = this.students[index];

    this.students.splice(index, 1);

    console.log(`Deleted: ${removedStudent.name}`);

    this.deleteMessage = `${removedStudent.name} was removed from the list.`;

    setTimeout(() => {
      this.deleteMessage = '';
    }, 3000);
  }

}