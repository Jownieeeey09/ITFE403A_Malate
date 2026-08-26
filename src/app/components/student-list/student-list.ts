import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  students = [
    { name: 'Mary Beth D. Gracia', course: 'BSIT', yearLevel: '4th Year', isFavorite: false, active: true },
    { name: 'Bonna Mae L. Pitogo', course: 'BSIT', yearLevel: '4th Year', isFavorite: false, active: true },
    { name: 'Niel Jhon E. Celocia', course: 'BSIT', yearLevel: '4th Year', isFavorite: false, active: false },
    { name: 'Kurt Wojtyle S. Rizal', course: 'BSIT', yearLevel: '4th Year', isFavorite: false, active: false }
  ];

  deleteMessage = '';
  editingStudent: any = null;
  isLoading = true;

  ngOnInit() {
    console.log('ngOnInit ran, isLoading is:', this.isLoading);

    setTimeout(() => {
      this.isLoading = false;
      console.log('after delay, isLoading is now:', this.isLoading);
    }, 2000);
  }

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