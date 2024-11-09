import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { availableItems } from '../../libs/constants';
import { WasteItem } from '../../libs/types';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NavComponent, CdkDropList, CdkDrag],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  currentScore = 0;
  totalPossibleScore = 100; // Fixed total score of 100
  progressPercentage = 0;
  itemsSorted = 0;
  totalItems = 20; // Fixed number of items
  feedback = '';
  feedbackClass = '';
  
  availableItems = [...availableItems];
  trashBin: WasteItem[] = [];
  recycleBin: WasteItem[] = [];

  updateScores() {
    // Calculate current score
    this.currentScore = this.trashBin.reduce((total, item) => total + item.points, 0) +
                        this.recycleBin.reduce((total, item) => total + item.points, 0);
    
    // Update progress percentage
    this.progressPercentage = this.currentScore; // Since each item is worth 5 points, total is 100
    this.itemsSorted = this.trashBin.length + this.recycleBin.length;
  }

  drop(event: CdkDragDrop<WasteItem[]>, binType?: 'trash' | 'recycle') {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      if (binType) {
        const item = event.container.data[event.currentIndex];
        this.checkCorrectBin(item, binType);
      }
      this.updateScores();
    }
  }

  checkCorrectBin(item: WasteItem, binType: 'trash' | 'recycle') {
    const isCorrect = (
      (binType === 'trash' && item.type === 'trash') ||
      (binType === 'recycle' && item.type === 'recyclable')
    );

    if (isCorrect) {
      this.feedback = `Great job! ${item.name} belongs in the ${binType} bin!`;
      this.feedbackClass = 'correct';
    } else {
      // Move item back to available items
      if (binType === 'trash') {
        this.trashBin = this.trashBin.filter(i => i.id !== item.id);
      } else {
        this.recycleBin = this.recycleBin.filter(i => i.id !== item.id);
      }
      this.availableItems.push(item);
      
      this.feedback = `Oops! ${item.name} belongs in the ${item.type === 'trash' ? 'trash' : 'recycling'} bin!`;
      this.feedbackClass = 'incorrect';
    }

    setTimeout(() => {
      this.feedback = '';
      this.feedbackClass = '';
    }, 3000);

    this.updateScores();
  }

  resetGame() {
    this.currentScore = 0;
    this.progressPercentage = 0;
    this.itemsSorted = 0;
    this.feedback = '';
    this.feedbackClass = '';
    this.availableItems = [...availableItems];
    this.trashBin = [];
    this.recycleBin = [];
  }
}