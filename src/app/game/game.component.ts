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
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NavComponent, CdkDropList, CdkDrag],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  currentScore = 0;
  totalPossibleScore = 100; 
  progressPercentage = 0;
  itemsSorted = 0;
  totalItems = 20; 
  feedback = '';
  feedbackClass = '';
  isGameComplete = false;
  
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
    this.checkGameCompletion();
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

  triggerConfetti() {
    const duration = 3000;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = duration - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Use confetti twice for denser effect
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  }

  checkGameCompletion() {
    const totalSortedCorrectly = this.trashBin.length + this.recycleBin.length;
    const allItemsSorted = totalSortedCorrectly === this.totalItems;
    const perfectScore = this.currentScore === this.totalPossibleScore;

    if (allItemsSorted && perfectScore && !this.isGameComplete) {
      this.isGameComplete = true;
      this.triggerConfetti();
    }
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
    this.isGameComplete = false;
  }
}