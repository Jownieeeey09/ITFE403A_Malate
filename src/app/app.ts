import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProfileCard } from './components/profile-card/profile-card';
import { AnnouncementCard } from './components/announcement-card/announcement-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Footer,
    ProfileCard,
    AnnouncementCard
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}