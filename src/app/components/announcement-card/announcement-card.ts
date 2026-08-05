import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-card',
  standalone: true,
  templateUrl: './announcement-card.html',
  styleUrl: './announcement-card.css'
})
export class Announcementcard {
  announcementTitle1 = 'Enrollment Reminder';
  announcementBody1 = 'Enrollment for the First Semester AY 2026-2027 will end on August 08, 2026. Please complete your requirements on time.';

  announcementTitle2 = 'Official ID Picture Taking';
  announcementBody2 = 'Official ID Picture Taking for all enrolled students will be held on August 20, 2026 at the Don Bosco AVR from 8:00 AM to 4:00 PM. Students are required to wear their complete school uniform and present their registration form.';

  announcementTitle3 = 'Intramurals 2026';
  announcementBody3 = 'Registration for the annual Intramurals is now open. Students may register for sports and cultural events until September 05, 2026.';

  announcementTitle4 = 'SDP - CLUB MEMBER SCREENING';
  announcementBody4 = 'Instructions for the Club Member Screening will be given after the holy mass.';

  announcementTitle5 = 'CLASS SUSPENSION';
  announcementBody5 = 'Due to inclement weather, all face-to-face classes are suspended today';

  announcementTitle6 = 'BUWAN NG WIKA: BARRIO FIESTA CELEBRATION';
  announcementBody6 = 'Join us as we celebrate Buwan ng Wika with a fun filled Barrio Fiesta!';

  announcementTitle7 = 'EXAMINATION NOTICE';
  announcementBody7 = 'Midterm examination will be on September 14, 2026';

  announcementTitle8 = 'LIBRARY ADVISORY';
  announcementBody8 = 'Students are reminded to return borrowed books on or before the due date to avoid overdue fines.';

  announcementTitle9 = 'LOST AND FOUND';
  announcementBody9 = 'A black wallet was found near the school cafeteria. Owner may claim it at the SAO office by presenting proper Identification and describing its contents.';

  announcementTitle10 = 'BOSCONIAN NIGHT NOTICE';
  announcementBody10 = 'Get ready for an exciting and unforgettable evening as we celebrate Bosconian Night 2026!';

}

