import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcement-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement-card.html',
  styleUrl: './announcement-card.css'
})
export class Announcementcard {

  announcements = [

    {
      title: 'Enrollment Reminder',
      body: 'Enrollment for the First Semester AY 2026-2027 will end on August 08, 2026. Please complete your requirements on time.',
      author: 'Student Affairs Office',
      date: 'August 01, 2026'
    },

    {
      title: 'Official ID Picture Taking',
      body: 'Official ID Picture Taking for all enrolled students will be held on August 20, 2026 at the Don Bosco AVR from 8:00 AM to 4:00 PM. Students are required to wear their complete school uniform and present their registration form.',
      author: 'Student Affairs Office',
      date: 'August 05, 2026'
    },

    {
      title: 'Intramurals 2026',
      body: 'Registration for the annual Intramurals is now open. Students may register for sports and cultural events until September 05, 2026.',
      author: 'Don Bosco Student Supreme Council',
      date: 'August 06, 2026'
    },

    {
      title: 'SDP - CLUB MEMBER SCREENING',
      body: 'Instructions for the Club Member Screening will be given after the holy mass.',
      author: 'Student Affairs Office',
      date: 'August 07, 2026'
    },

    {
      title: 'BUWAN NG WIKA: BARRIO FIESTA CELEBRATION',
      body: 'Join us as we celebrate Buwan ng Wika with a fun filled Barrio Fiesta!',
      author: 'Don Bosco Supreme Student Council',
      date: 'August 15, 2026'
    },

    {
      title: 'EXAMINATION NOTICE',
      body: 'Midterm examination will be on September 14, 2026.',
      author: 'Academic Office',
      date: 'September 01, 2026'
    },

    {
      title: 'LIBRARY ADVISORY',
      body: 'Students are reminded to return borrowed books on or before the due date to avoid overdue fines.',
      author: 'Library Office',
      date: 'September 03, 2026'
    },

    {
      title: 'LOST AND FOUND',
      body: 'A black wallet was found near the school cafeteria. Owner may claim it at the SAO office by presenting proper identification and describing its contents.',
      author: 'Student Affairs Office',
      date: 'September 04, 2026'
    },

    {
      title: 'BOSCONIAN NIGHT NOTICE',
      body: 'Get ready for an exciting and unforgettable evening as we celebrate Bosconian Night 2026!',
      author: 'Don Bosco Supreme Student Council',
      date: 'September 10, 2026'
    },

    {
      title: 'CAREER GUIDANCE SEMINAR',
      body: 'A Career Guidance Seminar for graduating students will be held on October 10, 2026 at the Don Bosco Gymnasium. Attendance is highly encouraged.',
      author: 'Guidance Office',
      date: 'October 01, 2026'
    },

    {
      title: 'CHRISTMAS OUTREACH PROGRAM',
      body: 'The Bosconian Christmas Outreach Program will take place on December 12, 2026. Students are invited to donate school supplies, food, or clothing for partner communities.',
      author: 'Don Bosco Supreme Student Council',
      date: 'December 01, 2026'
    }

  ];

}