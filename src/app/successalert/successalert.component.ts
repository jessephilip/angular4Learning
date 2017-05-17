import { Component } from '@angular/core';

@Component({
	selector: '[app-successAlert]',
	templateUrl: './successAlert.component.html',
	styleUrls: ['./successAlert.component.css']
})
export class SuccessAlertComponent {

	// outputs to the DOM
	private _message = 'Success!';
	public get message(): string { return this._message; }
	public set message(message: string) { this._message = message; }

}
