import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-odd',
	templateUrl: './odd.component.html',
	styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

	@Input() number: number;

	ngOnInit() {
		// console.log(this.number);
	}

	// ngOnChanges(changes: SimpleChanges) {
	// 	console.log('odd', changes);
	// 	if (changes.number.currentValue % 2 !== 0) this.oddArray.push(changes.number.currentValue);
	// }

	//
	// private _oddArray:number[] = [];
	// public get oddArray():number[] { return this._oddArray; }
	// public set oddArray(array:number[]) { this._oddArray = array; }
}
