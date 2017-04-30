import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-assignment3',
	templateUrl: './assignment3.component.html',
	styles: [
		`
		.white {
			color: white;
		}
		`
	]
})
export class Assignment3Component implements OnInit {

	private _showParagraph:boolean = true;
	public get showParagraph():boolean { return this._showParagraph; }
	public set showParagraph(bool:boolean) { this._showParagraph = bool; }

	private _buttonPresses = [];
	public get buttonPresses() { return this._buttonPresses; }
	public set buttonPresses(presses) { this._buttonPresses = presses; }

	public buttonPress(event) {
		this.showParagraph ? this.showParagraph = false : this.showParagraph = true;
		this.buttonPresses.push(event.timeStamp);
	}

	constructor() { }

	ngOnInit() {
	}

}
