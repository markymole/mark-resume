import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeIn', [
     transition('void => *', [
       style({ opacity: 0}),
       animate(700, style({ opacity: 1}))
     ])
    ])
  ]
})

export class SkillsComponent implements OnInit {
  isOpen = true;

  togggle() {
    this.isOpen = !this.isOpen;
  }
  
  
  constructor() {}

  ngOnInit(): void {
    
  }
 
}
