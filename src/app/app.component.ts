import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	private _value = 7;
	public get value(): number { return this._value; }
	public set value(value: number) { this._value = value; }

	// for assignment number 4
	oddNumbers: number[] = [];
	evenNumbers: number[] = [];

	onIntervalFired(event) {
		console.log(event);
		if (event % 2 === 0) {
			this.evenNumbers.push(event);
		} else {
			this.oddNumbers.push(event);
		}
	}
}
