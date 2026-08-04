import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-announcement-card',
  standalone: true,
  imports: [],
  templateUrl: './announcement-card.html',
  styleUrl: './announcement-card.css'
})
export class AnnouncementCard {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() date: string = '';

}