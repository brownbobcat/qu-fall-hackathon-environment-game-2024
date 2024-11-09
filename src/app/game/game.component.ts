import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { availableItems } from '../../libs/constants';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  items = availableItems

}
