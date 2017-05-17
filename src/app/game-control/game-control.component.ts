import { Component, EventEmitter, Output } from '@angular/core';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@Component({
	selector: 'app-game-control',
	templateUrl: './game-control.component.html',
	styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

	// variable taking the interval method
	private interval;
	private lastNumber = 0;
	@Output() intervalFired = new EventEmitter<number>();

	private onStartGame() {
		this.interval = setInterval(() => {
			this.intervalFired.emit(this.lastNumber + 1);
			this.lastNumber++;
		}, 1000);
	}

	private onPauseGame() {
		clearInterval(this.interval);
	}

	// @Output() x:number = 0;
	//
	// public incrementNumber() {
	// 	this.x++;
	// 	console.log('emit ', this.x);
	// }
	//
	// // create the variable here, but do not assign it the setInterval or it will run on startup
	// public timer;
	//
	// // use fat arrow function to preserve THIS referring to the class.
	// // notice that the setInterval is calling the actual this.incrementNumber function
	// public startGame() {
	// 	this.timer = setInterval(() => this.incrementNumber(), 1000);
	// }
	//
	// public stopGame = function () {
	// 	clearInterval(this.timer);
	// }




}
