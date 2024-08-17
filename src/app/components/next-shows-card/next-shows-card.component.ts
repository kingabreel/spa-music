import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shows-card',
  standalone: true,
  imports: [],
  templateUrl: './next-shows-card.component.html',
  styleUrl: './next-shows-card.component.css'
})
export class NextShowsCardComponent {
  @Input() name = 'New Scorpions';
  @Input() place = 'Brazil';
  @Input() dateDay = '11';
  @Input() month = 'Set';
  @Input() hour = '00:00';
}
