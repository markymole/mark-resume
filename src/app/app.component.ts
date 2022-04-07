import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
     transition('void => *', [
       style({ opacity: 0}),
       animate(700, style({ opacity: 1}))
     ])
    ])
  ]
})
export class AppComponent {
  title = 'my-resume-project';
}
