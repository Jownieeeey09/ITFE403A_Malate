import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { ProfileCard } from './components/profile-card/profile-card';
import { Announcementcard } from './components/announcement-card/announcement-card';
import { StudentList } from './components/student-list/student-list';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',

  imports: [
    Header,
    ProfileCard,
    Announcementcard,
    StudentList,
    Footer
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}