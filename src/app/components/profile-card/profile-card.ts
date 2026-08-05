import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {

studentName = 'Jownie Ann D. Malate'
studentNumber = '23017616'
course = 'Bachelor of Science in Information Technology'
yearLevel = '4th Year'
section = 'N/A'
nickname = 'yang-yang'
email = 'jownieann.malate@dbtc-cebu.edu.ph'
grade: number = 1.5;
}
