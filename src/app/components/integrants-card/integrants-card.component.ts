import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-integrants-card',
  standalone: true,
  imports: [],
  templateUrl: './integrants-card.component.html',
  styleUrl: './integrants-card.component.css'
})
export class IntegrantsCardComponent {
  @Input() image:string = '';
  @Input() name:string = '';
  @Input() function:string = '';
  @Input() description:string = '';
}
