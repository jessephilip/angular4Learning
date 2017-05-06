import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-game-control',
	templateUrl: './game-control.component.html',
	styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

	constructor() { }

	ngOnInit() {}

	@Output() start:EventEmitter<number> = new EventEmitter<number>();

	private x:number = 0;

	private emitNumber = this.start.emit(this.x++);

	private startGame = setInterval(this.emitNumber, 1000);

	private stopGame = clearInterval(this.startGame);




}
