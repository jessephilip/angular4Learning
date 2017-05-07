import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-even',
	templateUrl: './even.component.html',
	styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges{

	constructor() { }

	ngOnInit() {
		console.log(this.number);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('even', changes);
		if (changes.number.currentValue % 2 === 0) this.evenArray.push(changes.number.currentValue);
	}

	@Input() number:number;

	private _evenArray:number[] = [];
	public get evenArray():number[] { return this._evenArray; }
	public set evenArray(array:number[]) { this._evenArray = array; }

}
