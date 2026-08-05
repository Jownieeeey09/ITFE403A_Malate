import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProfileCard } from './components/profile-card/profile-card';
import { Announcementcard } from './components/announcement-card/announcement-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, ProfileCard, Announcementcard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}