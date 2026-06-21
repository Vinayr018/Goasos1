import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
  @Input({ required: true }) public showCLient!: boolean;
  @Input({ required: true }) public h1!: string;
  @Input({ required: true }) public p!: string;
  @Input() public premium = false;
  @Input() public backgroundImage = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80';
}
